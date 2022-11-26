<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* @import url(assets/css/base.css); 可以在main.js中引入初始化css文件，也可以在这里引入 */
</style>
