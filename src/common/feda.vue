<template>
   <transition class="fead-page">
    <slot ></slot>
   </transition>
</template>

<script>
export default {
  name: 'feda-page',

}
</script>

<style scoped lang="stylus">
  .v-enter, .v-leave-to {
    opacity: 0
  }
  .v-enter-active, .v-leave-active {
  transition: opacity 1s
  }
</style>