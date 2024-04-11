<script setup lang="ts"></script>

<template>
  <form class="login-form">
    <input placeholder="Login" />
    <input placeholder="Password" />
    <button type="Submit">Login</button>
  </form>
</template>

<style lang="scss" scoped>
@import '@/styles/vars.scss';

.login-form {
  width: 200px;
  height: 200px;
  background-color: $white;
}
</style>
