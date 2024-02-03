<template>
    <section class='flex justify-center '>
        <BaseCard>
            <h1 class="text-purple-700 inline-block font-black text-2xl mb-6">Fill This Form :</h1>
            <div class="flex items-center mb-4 flex-wrap ml-4 ">
                <inputText label="First Name" v-model="data.firstName" size="small" placeholder="John" class="mr-12 " />
                <inputText label="Middle Name" v-model="data.middleName" size="small" placeholder="Martus" class="mr-12" />
                <inputText label="Last Name" v-model="data.lastName" size="small" placeholder="Doe" />
            </div>
            <div class="flex items-center mb-10 flex-wrap ml-4 ">
                <inputText type="number" label="Phone Number" v-model="data.phoneNumber" size="small"
                    placeholder="+91 0000000000" class="mr-12" />
                <inputText label="Email Id" v-model="data.email" size="small" placeholder="test123@gmail.com" />
            </div>
            <divider align="left" type="solid">
                <b class="text-purple-600  ">Weekdays</b>
            </divider>

            <div class="flex gap-8 items-center mb-10 flex-wrap">
                <div v-for="(day, index) in weekdays" :key="index" class="text-purple-700 py-2 ml-4 ">
                    <Checkbox v-model="data.selectedDays" :id="day.id" :value="day.name" class="mr-2" name="weekdays" />
                    <label :for="day.id">{{ day.name }}</label>
                </div>
            </div>
            <divider align="left" type="solid">
                <b class="text-purple-600">Gender</b>
            </divider>
            <div class="flex gap-8 items-center mb-10 flex-wrap">
                <div v-for="(gender, index) in genders" :key="index" class=" text-purple-700 py-2 ml-4">
                    <RadioButton v-model="data.selectedGender" :id="gender.id" name="gender" :value="gender.name" />
                    <label :for="gender.id" class="ml-2">{{ gender.name }}</label>
                </div>
            </div>
            <divider align="left" type="solid">
                <b class="text-purple-600">Date Of Birth</b>
            </divider>
            <div class="mb-10">
                <span class="p-float-label ml-4 ">
                    <Calendar v-model="data.dob" id="myCalendar" inputId="Birth_date" showIcon iconDisplay="input" />
                    <label for="myCalendar">DOB</label>
                </span>
            </div>
            <BaseButton type="submit" normalButton label="Submit" size="small" />
        </BaseCard>
    </section>
</template>
  
<script>
import inputText from '../components/formInputs/inputText.vue';
import Checkbox from 'primevue/checkbox';
import Divider from 'primevue/divider';
import RadioButton from 'primevue/radiobutton';
import Calendar from 'primevue/calendar';


export default {
    components: {
        inputText,
        Checkbox,
        Divider,
        RadioButton,
        Calendar
    },
    data() {
        return {
            weekdays: [
                { id: "mon", name: "Monday" },
                { id: "tue", name: "Tuesday" },
                { id: "wed", name: "Wednesday" },
                { id: "thur", name: "Thursday" },
                { id: "fri", name: "Friday" },
            ],
            genders: [
                { id: "male", name: "Male" },
                { id: "female", name: "Female" }
            ],
            data: {
                firstName: null,
                middleName: null,
                lastName: null,
                phoneNumber: null,
                email: null,
                selectedDays: [],
                selectedGender: null,
                dob: null
            }
        };
    }
};
</script>


  