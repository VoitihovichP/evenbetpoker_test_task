<script setup>
import { Input, InputPassword } from 'ant-design-vue'

const { modelValue, placeholder, type } = defineProps({
  modelValue: String,
  placeholder: String,
  type: {
    type: String,
    default: 'text'
  }
})

const emit = defineEmits(['update:modelValue'])

const updateValue = (event) => {
  emit('update:modelValue', event.target.value)
}
</script>

<template>
  <div>
    <Input
      v-if="type !== 'password'"
      :value="modelValue"
      :placeholder="placeholder"
      :type="type"
      @input="updateValue"
    />
    <InputPassword
      v-if="type === 'password'"
      :value="modelValue"
      :placeholder="placeholder"
      @input="updateValue"
    />
  </div>
</template>

<style lang="scss"></style>
