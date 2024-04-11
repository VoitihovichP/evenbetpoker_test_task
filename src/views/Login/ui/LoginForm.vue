<script setup lang="ts">
import TextField from 'Shared/components/TextField.vue'
import { ref } from 'vue'
import ActionButton from 'Shared/components/ActionButton.vue'

const loginValue = ref('')
const passwordValue = ref('')
</script>

<template>
  <form class="login-form">
    <div class="login-form__wrapper">
      <TextField v-model="loginValue" placeholder="Login" />
      <TextField
        v-model="passwordValue"
        type="password"
        placeholder="Password"
      />
    </div>
    <ActionButton type="primary" full-width>
      <template #title>Login</template>
    </ActionButton>
  </form>
</template>

<style lang="scss" scoped>
@import 'Styles/vars';

.login-form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 24px;
  width: 300px;
  border-radius: $br-large;
  background-color: $grey;
  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 24px;
  }
}
</style>
