<template>
    <section class='flex justify-center '>
        <BaseCard>
            <h1 class="text-purple-700 inline-block font-black text-2xl mb-6">Fill This Form :</h1>
            <div class="flex items-center mb-4 flex-wrap ml-4 ">
                <formInput @keypress="isLetter($event)" label="First Name" v-model="data.firstName" size="small"
                    placeholder="John" class="mr-12 " :errorMessage="formError.firstName" />
                <formInput @keypress="isLetter($event)" label="Middle Name" v-model="data.middleName" size="small"
                    placeholder="Martus" class="mr-12" :errorMessage="formError.middleName" />
                <formInput @keypress="isLetter($event)" label="Last Name" v-model="data.lastName" size="small"
                    placeholder="Doe" :errorMessage="formError.lastName" />
            </div>
            <div class="flex items-center mb-10 flex-wrap ml-4 ">
                <formInput @keypress="isNumber($event)" type="number" label="Phone Number" v-model="data.phoneNumber"
                    size="small" placeholder="9999999999" class="mr-12" :errorMessage="formError.phoneNumber" />
                <formInput @keypress="isEmail($event)" label="Email Id" v-model="data.email" size="small"
                    placeholder="john123@gmail.com" :errorMessage="formError.email" />
            </div>
            <divider align="left" type="solid">
                <b class="text-purple-600  ">Weekdays</b>
            </divider>

            <div class="flex gap-8 items-center mb-10 flex-wrap">
                <div v-for="(day, index) in weekdays" :key="index" class="text-purple-700 py-2 ml-4 ">
                    <Checkbox v-model="data.selectedDays" :id="day.id" :value="day.name" class="mr-2" name="weekdays" />
                    <label :for="day.id">{{ day.name }}</label>
                </div>
                <InlineMessage class="text-xs text-red-600 ml-4 ">{{ formError.selectedDays }}</InlineMessage>
            </div>
            <divider align="left" type="solid">
                <b class="text-purple-600">Gender</b>
            </divider>
            <div class="flex gap-8 items-center mb-10 flex-wrap">
                <div v-for="(gender, index) in genders" :key="index" class=" text-purple-700 py-2 ml-4">
                    <RadioButton v-model="data.selectedGender" :id="gender.id" name="gender" :value="gender.name" />
                    <label :for="gender.id" class="ml-2">{{ gender.name }}</label>
                </div>
                <InlineMessage class="text-xs text-red-600 inline-block">{{ formError.selectedGender }}</InlineMessage>
            </div>
            <divider align="left" type="solid">
                <b class="text-purple-600">Date Of Birth</b>
            </divider>
            <div class="mb-2 ">
                <span class="p-float-label ml-4  ">
                    <Calendar v-model="data.dob" id="myCalendar" inputId="Birth_date" showIcon iconDisplay="input" />
                    <label for="myCalendar">DOB</label>
                    <InlineMessage class="text-xs text-red-600 ">{{ formError.dob }}</InlineMessage>
                </span>
                <BaseButton class="font-bold flex items-center justify-end"
                    @click="isFormEditPage ? updateFormData() : submitFormData()">{{ isFormEditPage ? 'Update' : 'Submit' }}
                </BaseButton>
            </div>
        </BaseCard>
    </section>
</template>
  
<script>
import Checkbox from 'primevue/checkbox';
import Divider from 'primevue/divider';
import RadioButton from 'primevue/radiobutton';
import Calendar from 'primevue/calendar';
import InlineMessage from 'primevue/inlinemessage';
import formInput from '../components/formInputs/formInput.vue';
import axios from 'axios'

export default {
    components: {
        formInput,
        Checkbox,
        Divider,
        RadioButton,
        Calendar
    },
    data() {
        return {
            isFormEditPage: this.$route.path.includes('edit'),
            formEditDataId: this.$route.params.id || 0,
            isFormDataValid: true,
            formError: {
                firstName: '',
                middleName: '',
                lastName: '',
                phoneNumber: '',
                email: '',
                selectedDays: '',
                selectedGender: '',
                dob: ''
            },
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
    },
    mounted() {
        this.getFormData()
    },
    methods: {
        getFormData() {
            axios.get(`https://saini-lifters-default-rtdb.firebaseio.com/form/${this.formEditDataId}.json`)
                .then((res) => {
                    const formData = res.data
                    this.data.firstName = formData.first_name
                    this.data.middleName = formData.middle_name
                    this.data.lastName = formData.last_name
                    this.data.phoneNumber = formData.phone_number
                    this.data.email = formData.email_id
                    this.data.selectedDays = formData.selected_days
                    this.data.selectedGender = formData.selected_gender
                    this.data.dob = formData.dob.slice('T', 10)
                })
        },
        validateForm() {
            this.isFormDataValid = true
            this.formError = {
                firstName: '',
                middleName: '',
                lastName: '',
                phoneNumber: '',
                email: '',
                selectedDays: '',
                selectedGender: '',
                dob: ''
            }
            if (!this.data.firstName) {
                this.formError.firstName = 'Please Enter The First Name'
                this.isFormDataValid = false
            }
            if (!this.data.middleName) {
                this.formError.middleName = 'Please Enter The Middle Name'
                this.isFormDataValid = false
            }
            if (!this.data.lastName) {
                this.formError.lastName = 'Please Enter The Last Name'
                this.isFormDataValid = false
            }
            if (!this.data.phoneNumber) {
                this.formError.phoneNumber = 'Please Enter The Phone Number'
                this.isFormDataValid = false
            }
            if (!this.data.email) {
                this.formError.email = 'Please Enter The Email Id'
                this.isFormDataValid = false
            }
            if (this.data.selectedDays.length === 0) {
                this.formError.selectedDays = 'Please Select the days'
                this.isFormDataValid = false
            }
            if (!this.data.selectedGender) {
                this.formError.selectedGender = 'Please Select The Gender'
                this.isFormDataValid = false
            }
            if (!this.data.dob) {
                this.formError.dob = 'Please Select Your Date Of Birth'
                this.isFormDataValid = false
            }
        },
        submitFormData() {
            this.validateForm()
            if (!this.isFormDataValid) {
                window.scrollTo({ top: 0, behavior: 'smooth' })
            } else {
                const payload = {
                    first_name: this.data.firstName,
                    middle_name: this.data.middleName,
                    last_name: this.data.lastName,
                    phone_number: this.data.phoneNumber,
                    email_id: this.data.email,
                    selected_days: this.data.selectedDays,
                    selected_gender: this.data.selectedGender,
                    dob: this.data.dob
                }
                axios.post('https://saini-lifters-default-rtdb.firebaseio.com/form.json', payload)
                    .then((res) => {
                        console.log(res)
                        this.$router.push({
                            path: '/data'
                        })
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            }
        },
        updateFormData() {
            console.log("update form works");
            this.validateForm()
            if (!this.isFormDataValid) {
                window.scrollTo({ top: 0, behavior: 'smooth' })
            } else {
                const payload = {
                    first_name: this.data.firstName,
                    middle_name: this.data.middleName,
                    last_name: this.data.lastName,
                    phone_number: this.data.phoneNumber,
                    email_id: this.data.email,
                    selected_days: this.data.selectedDays,
                    selected_gender: this.data.selectedGender,
                    dob: this.data.dob
                }
                axios.patch(`https://saini-lifters-default-rtdb.firebaseio.com/form/${this.formEditDataId}.json`, payload)
                    .then((res) => {
                        console.log(res);
                        this.$router.push('/data')
                    }).catch((err) => {
                        console.log(err);
                    })
            }
        },

        isLetter(e) {
            let char = String.fromCharCode(e.keyCode); // Get the character
            if (/^[A-Za-z]+$/.test(char)) return true; // Match with regex 
            else e.preventDefault(); // If not match, don't add to input text
        },
        isNumber(e) {
            e = (e) ? e : window.event;
            var charCode = (e.which) ? e.which : e.keyCode;
            if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
                e.preventDefault();;
            } else {
                return true;
            }
        },
        isEmail(e) {
            return String(e)
                .toLowerCase()
                .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                )
        },
    }
};
</script>


  