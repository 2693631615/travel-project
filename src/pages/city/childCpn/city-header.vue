<template>
  <div class="city-header">
    <router-link class="header-right right" to="/">
    <div class="header-left left">
    <span class="iconfont">&#xe629;</span>
    </div>
    </router-link>
    <div class="header-input" v-for="(item, index) of btnList" :key="index">
      <button class="city-state" @click="btnClick(index)" :class="{'active':isActive(index)}">
        {{item}}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  data () {
    return {
      btnList: ['国内', '国际'],
      btnIndex: 0
    }
  },
  methods: {
    btnClick (index) {
      return this.btnIndex = index
    }
  },
  computed: {
    isActive () {
      return (index) => this.btnIndex === index
    }
  }
}
</script>
<!-- 设计图为2倍尺寸设计图，所以在开发中应该将测量到的设计图的数据值乘以1/2 -->
<!-- 在移动端中通常使用vm,vh,rem作为单位，根据css初始化的文件，1em = html font-size = 50px -->
<style scoped lang="stylus">
  .city-header {
    display: flex
    height: var(--header-hg)
    line-height: var(--header-hg)
    background-color: var(--color-bg)
  }
    .header-left {
      width: .84rem
      text-align: center
      padding-right: 1rem 
      color: #fff
    }
    .header-left span {
      font-size: .4rem
    }
    .city-state {
      line-height: .54rem
      margin: .12rem 0
      color: #fff;
      font-weight: 700
      background-color: var(--color-bg)
      padding: 0 .6rem
      border: .04rem solid #fff
    }
    .active {
      background-color: #fff
      color: var(--color-bg)
    }
</style>