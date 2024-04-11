<script setup lang="ts">
import { Button, ButtonProps } from 'ant-design-vue'
import cn from 'classnames'

interface ActionButtonProps extends ButtonProps {
  fullWidth?: boolean
}

const { disabled, type, onClick, fullWidth } = defineProps<ActionButtonProps>()
</script>

<template>
  <Button
    :class="cn({ 'f-width': fullWidth })"
    :disabled="disabled"
    :type="type"
    @click="onClick"
  >
    <p>
      <slot name="title" />
    </p>
  </Button>
</template>

<style lang="scss" scoped>
@import 'Styles/vars';
.ant-btn {
  text-transform: uppercase;
}

.ant-btn-primary {
  background: $yellow;
  box-shadow: none;
  &:hover {
    background: $yellow-hover;
  }
}
</style>
