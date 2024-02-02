<template>
    <div class="flex flex-col gap-1">
        <label :for="label" class="text-purple-600">{{ label }}</label>
        <InputNumber type="number" :id="label" v-model="value" :size="size"
            class="max-w-80 border border-purple-200 focus:ring-transparent focus:border-purple-500 "
            :placeholder="placeholder" prefix="+91 " :useGrouping="false" />
    </div>
</template>

<script >
import InputNumber from 'primevue/inputnumber';

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
        }

    },
    components: {
        InputNumber
    }


}
</script>
