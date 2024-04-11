<script setup lang="ts">
import TextField from 'Shared/components/TextField.vue'
import { ref } from 'vue'
import ActionButton from 'Shared/components/ActionButton.vue'

const loginValue = ref('')
const passwordValue = ref('')
</script>

<template>
  <form class="login-form">
    <h1 class="login-form__title">Welcome back!</h1>
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
  padding: 16px 24px 24px 24px;
  width: 300px;
  border-radius: $br-large;
  background-color: $grey;
  &__title {
    margin: 0 auto 20px auto;
    width: fit-content;
    color: $white;
    font-weight: 500;
    text-transform: uppercase;
  }
  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 24px;
  }
}
</style>
