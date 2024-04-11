<script setup lang="ts">
interface IUserBalanceProps {
  balanceName: string
  balance: string
}

const { balanceName, balance } = defineProps<IUserBalanceProps>()
</script>

<template>
  <div>
    <p>{{ balanceName }}</p>
    <p>{{ balance }}</p>
  </div>
</template>
