<script setup lang="ts">
interface IUserBalanceProps {
  balanceName: string
  balance: number
}

const { balanceName, balance } = defineProps<IUserBalanceProps>()
</script>

<template>
  <div class="user-balance">
    <p class="user-balance__title">{{ balanceName }}</p>
    <p class="user-balance__value">{{ balance }}</p>
  </div>
</template>

<style lang="scss" scoped>
@import 'Styles/vars';

.user-balance {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: $white;
  &__title {
    font-size: 18px;
    font-weight: 400;
  }
  &__value {
    font-size: 24px;
    font-weight: 700;
  }
}
</style>
