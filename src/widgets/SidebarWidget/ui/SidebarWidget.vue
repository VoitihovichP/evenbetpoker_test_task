<script lang="ts" setup>
import UserBadge from '@/entities/UserBadge/ui/UserBadge.vue'
</script>

<template>
  <aside class="sidebar">
    <UserBadge />
  </aside>
</template>

<style lang="scss" scoped>
@import 'Styles/vars';

.sidebar {
  position: fixed;
  left: 0;
  padding: 12px 18px;
  height: 100dvh;
  width: $sidebar-width;
  background: $grey;
}
</style>
