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

<style lang="scss">
@import 'Styles/vars';

.ant-input,
.ant-input-password {
  background: $secondary-blue;
  border: none;
  color: $white;
  &:focus {
    box-shadow: $input-shadow;
  }
  &::placeholder {
    color: $white;
    opacity: 0.5;
  }
}

.ant-input-affix-wrapper-focused {
  box-shadow: $input-shadow;
}

.ant-input-password-icon {
  svg {
    fill: $white;
  }
}
</style>
