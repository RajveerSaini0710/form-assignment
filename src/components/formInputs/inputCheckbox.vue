<template>
    <div class="card flex justify-content-center">
        <div class="flex flex-column gap-3">
            <Checkbox v-model="value" :inputId="id" name="weekdays" :value="valueName"
                @input="$emit('update:modelValue', $event.target.value)" />
            <label :for="id">{{ valueName }}</label>
        </div>
    </div>
</template>

<script>
import Checkbox from 'primevue/checkbox';

export default {
    components: {
        Checkbox
    },
    props: {
        modelValue: { type: String },
        id: { type: String },
        valueName: { type: String }
    },
    emits: ['update:modelValue'],
    computed: {
        value: {
            get() {
                return this.modelValue
            },
            set(value) {
                this.$emit('update:modelValue', value)
            },
        },
    },
};
</script>

  