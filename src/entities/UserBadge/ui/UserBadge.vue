<script lang="ts" setup>
import { UserOutlined } from '@ant-design/icons-vue'
</script>

<template>
  <div class="user-badge">
    <UserOutlined />
    <p class="user-badge__name">User_test_1</p>
  </div>
</template>

<style lang="scss">
@import 'Styles/vars';

.user-badge {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  background: $dark-blue;
  border-radius: $br-medium;
  box-shadow: $card-shadow;
  &__name {
    color: $white;
    font-size: 20px;
    font-weight: 400;
  }
  .anticon-user {
    svg {
      fill: $yellow;
      width: 4em !important;
      height: 4em !important;
    }
  }
}
</style>
