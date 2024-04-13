<script lang="ts" setup>
import UserBadge from '@/entities/UserBadge/ui/UserBadge.vue'
import UserBalance from '@/entities/UserBalance/ui/UserBalance.vue'
</script>

<template>
  <aside class="sidebar">
    <UserBadge />
    <div class="sidebar__balances">
      <UserBalance :balance="10000" balance-name="Total balance" />
      <UserBalance :balance="100" balance-name="Bonus balance" />
      <UserBalance :balance="0" balance-name="In-game balance" />
    </div>
  </aside>
</template>

<style lang="scss" scoped>
@import 'Styles/vars';

.sidebar {
  position: fixed;
  left: 0;
  padding: $p-default;
  height: 100dvh;
  width: $sidebar-width;
  background: $grey;
  &__balances {
    padding: $p-default;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    margin-top: 34px;
    background: $dark-blue;
    border-radius: $br-medium;
    box-shadow: $card-shadow;
  }
}
</style>
