<template>
    <section>
        <div class="card">
            <DataTable :value="formData" tableStyle="min-width: 50rem" class="tableContent">
                <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header">
                </Column>

            </DataTable>
        </div>
    </section>
</template>

<script>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import axios from 'axios'

export default {
    components: {
        DataTable,
        Column,
    },
    data() {
        return {
            formData: [],
            columns: [
                { field: "fullName", header: 'Full Name' },
                { field: "phoneNumber", header: 'Phone Number' },
                { field: "emailId", header: 'Email ID' },
                { field: "weekDays", header: 'Weekdays' },
                { field: "gender", header: 'Gender' },
                { field: "dateOfBirth", header: 'Date Of Birth' },
            ]
        }
    },
    mounted() {
        this.getFormData()
    },
    methods: {
        getFormData() {
            axios.get('https://saini-lifters-default-rtdb.firebaseio.com/form.json')
                .then((res) => {
                    const data = res.data
                    for (const id in data) {
                        this.formData.push({
                            id: id,
                            fullName: `${data[id].first_name} ${data[id].middle_name} ${data[id].last_name}`,
                            phoneNumber: data[id].phone_number,
                            emailId: data[id].email_id,
                            weekDays: data[id].selected_days.map((day) => { return day }),
                            gender: data[id].selected_gender,
                            dateOfBirth: data[id].dob.slice('T', 10)
                        })
                    }
                    console.log(this.formData)
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }

}
</script>