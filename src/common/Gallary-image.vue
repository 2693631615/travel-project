<template>
  <div class="gallary-image">
    <slot name="gallary"></slot>
  </div>
</template>

<script>
export default {
name: 'gallary-image',
}
</script>

<style scoped lang="stylus">
.gallary-image {
  position: fixed
  top: 0
  bottom: 0
  left: 0
  right: 0
  background-color: #000
  z-index: 9
}

</style>