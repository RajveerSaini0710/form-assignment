<template>
    <section>
        <div v-if="!isFormDataLoaded" class="flex justify-center items-center h-lvh">
            <ProgressSpinner style="width: 100px; height: 100px" strokeWidth="4" fill="var(--surface-ground)"
                animationDuration="1s" aria-label="Custom ProgressSpinner" />
        </div>
        <div class="card" v-else>
            <DataTable :value="formData" tableStyle="min-width: 50rem" class="tableContent">
                <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header">
                </Column>
                <Column :header="buttonTitle" :exportable="false" style="min-width:8rem" class="flex">
                    <template #body="slotProps">

                        <BaseButton primeVueButton rounded icon="pi pi-pencil" @click="editFormData(slotProps.data.id)" />
                        <BaseButton primeVueButton rounded icon="pi pi-trash" size="small" severity="danger"
                            @click="deleteFormData(slotProps.data.id)" />

                    </template>
                </Column>
            </DataTable>
            {{ isFormDataEdit }}
        </div>
        <section class="w-full mt-10 flex justify-center items-end">
            <div v-if="isMessage"
                class="border py-3 px-6 max-w-fit font-bold text-white border-purple-700 bg-purple-800 flex justify-center items-center">
                <Message :severity="messageType">{{ messageInfo }}</Message>
            </div>
        </section>

    </section>
</template>

<script>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import axios from 'axios'
import ProgressSpinner from 'primevue/progressspinner';
import Message from 'primevue/message';



export default {
    components: {
        DataTable,
        Column,
        ProgressSpinner
    },
    data() {
        return {

            isFormDataEdit: true,
            isFormDataLoaded: false,
            formData: [],
            columns: [
                { field: "fullName", header: 'Full Name' },
                { field: "phoneNumber", header: 'Phone Number' },
                { field: "emailId", header: 'Email ID' },
                { field: "weekDays", header: 'Weekdays' },
                { field: "gender", header: 'Gender' },
                { field: "dateOfBirth", header: 'Date Of Birth' },
            ],
            buttonTitle: 'Edit / Delete',
            // success/error message 
            isMessage: false,
            messageType: null,
            messageInfo: ''
        }
    },
    mounted() {
        this.getFormData()
    },
    methods: {
        getFormData() {
            this.isFormDataLoaded = false
            axios.get('https://saini-lifters-default-rtdb.firebaseio.com/form.json')
                .then((res) => {
                    this.isFormDataLoaded = true
                    const data = res.data
                    let index = 1
                    for (const id in data) {
                        this.formData.push({
                            sr: index++,
                            id: id,
                            fullName: `${data[id].first_name} ${data[id].middle_name} ${data[id].last_name}`,
                            phoneNumber: data[id].phone_number,
                            emailId: data[id].email_id,
                            weekDays: data[id].selected_days.join(', '),
                            gender: data[id].selected_gender,
                            dateOfBirth: data[id].dob.slice('T', 10)
                        })
                    }

                })
                .catch((err) => {
                    console.log(err);
                })
        },
        editFormData(id) {
            this.isFormDataEdit = true
            console.log(id);
        },
        deleteFormData(id) {
            axios.delete(`https://saini-lifters-default-rtdb.firebaseio.com/form/${id}.json`)
                .then((res) => {
                    console.log(res);
                    if (res.status === 200) {
                        this.isMessage = true
                        this.messageType = 'success';
                        this.messageInfo = "Successfully Deleted The Data"
                        window.location.reload()
                    }
                })
                .catch((err) => {
                    this.isMessage = true
                    this.messageType = 'error';
                    this.messageInfo = `Error Occured While Deleting The Data - ${err}`
                    setTimeout(() => {
                        window.location.reload()
                    }, 2000);
                })
        }
    }

}
</script>