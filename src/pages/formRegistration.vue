<template>
    <section class='flex justify-center'>
        <BaseCard>
            <h1 class="text-purple-700 inline-block font-black text-2xl mb-6">Fill This Form :</h1>
            <div class="flex items-center ">
                <inputText label="First Name" v-model="data.firstName" size="small" placeholder="John" class="mr-12" />
                <inputText label="Middle Name" v-model="data.middleName" size="small" placeholder="Martus" class="mr-12" />
                <inputText label="Last Name" v-model="data.lastName" size="small" placeholder="Doe" />
            </div>
            <div>
                <inputNumber label="Phone Number" v-model="data.phone" size="small" placeholder="+91 0000000000" />
                <inputText label="Email Id" v-model="data.lastName" size="small" placeholder="test123@gmail.com" />
            </div>
        </BaseCard>
    </section>
</template>

<script>
import inputText from '../components/formInputs/inputText.vue';
import inputNumber from '../components/formInputs/inputNumber.vue';

export default {
    components: {
        inputText,
        inputNumber
    },
    data() {
        return {
            data: {
                firstName: null,
                middleName: null,
                lastName: null,
                phone: null,
                email: null
            }
        }
    },
    methods: {

    }
}
</script>