<script lang="ts" setup></script>

<template>
  <aside class="sidebar">sidebar</aside>
</template>

<style lang="scss" scoped>
@import 'Styles/vars';

.sidebar {
  position: fixed;
  left: 0;
  height: 100dvh;
  width: $sidebar-width;
  background: $grey;
}
</style>
