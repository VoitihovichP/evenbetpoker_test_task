<script lang="ts" setup>
import SidebarWidget from '@/widgets/SidebarWidget/ui/SidebarWidget.vue'
</script>

<template>
  <main class="inner-main">
    <SidebarWidget />
    <div class="inner-wrapper">
      <RouterView />
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import 'Styles/vars';

.inner-main {
  display: flex;
}

.inner-wrapper {
  position: absolute;
  right: 0;
  width: calc(100vw - $sidebar-width);
}
</style>
