<template>
    <div class="flex flex-col gap-1">
        <label :for="label" class="text-purple-600">{{ label }}</label>
        <InputText type="text" :id="label" v-model="value" :size="size"
            class="w-full border border-purple-200 focus:ring-transparent focus:border-purple-500 "
            :placeholder="placeholder" />
    </div>
</template>

<script >

import InputText from 'primevue/inputtext';

export default {
    props: {
        modelValue: {
            type: String,
            required: true,
            default: null
        },
        label: {
            type: String,
            required: true,
            default: null
        },
        size: {
            type: String,
            required: false,
        },
        customClass: {
            type: String,
            required: false,
        },
        placeholder: {
            type: String,
            required: false,
        },


    },
    components: {
        InputText
    }


}
</script>
