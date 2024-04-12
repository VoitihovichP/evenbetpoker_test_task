<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

import InnerLayout from '@/entities/layouts/InnerLayout/InnerLayout.vue'
import EmptyLayout from '@/entities/layouts/EmptyLayout/EmptyLayout.vue'

const route = useRoute()

const layoutComponent = computed(() => {
  const layout: string = route.meta.layout

  if (layout === 'inner') {
    return InnerLayout
  } else if (layout === 'empty') {
    return EmptyLayout
  }

  return InnerLayout
})
</script>

<template>
  <component :is="layoutComponent">
    <RouterView />
  </component>
</template>
