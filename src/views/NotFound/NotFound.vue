<script lang="ts" setup>
import NotFoundImage from 'Shared/assets/NotFoundImage.png'
</script>

<template>
  <div class="not-found">
    <img class="not-found__img" :src="NotFoundImage" alt="" />
  </div>
</template>

<style lang="scss" scoped>
.not-found {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  &__img {
    width: 680px;
  }
}
</style>
