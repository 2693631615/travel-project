<template>
  <div class="Header">
    <router-link to="/" tag="div" v-if="isShow">
      <div class="detail-back iconfont">&#xe629;</div>
    </router-link>
    <div class="detail-header" :style="opacityStyle" v-else>
      <router-link to="/" tag="div">
        <div class="header-left left iconfont">&#xe629;</div>
      </router-link>
      <div class="header-title">{{title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Detail-header',
  //Detail-header组件渐隐渐现的效果
  props: {
    title: String,
  },
  data () {
    return {
      isShow: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      // console.log(document.documentElement.scrollTop)
      const top = document.documentElement.scrollTop
      if (top > 50) {
        let opacity = top / 150
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {opacity}
        this.isShow = false
      } else {
        this.isShow = true
      }
    }
  },
  activated () { //window全局事件，用于在全局绑定一个全局事件
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll) 
    //在当前组件处于不活跃状态时，对全局事件进行解绑，避免其他组件受到全局事件的影响
  }

}
</script>

<style scoped lang="stylus">
  .Header {
    color: #fff
    text-align: center
  }
  .detail-back {
    position: absolute
    top: .2rem
    left: .2rem
    width: .8rem
    line-height: .8rem
    font-size: .4rem
    border-radius: 50%
    background-color: rgba(0, 0, 0, .5)
  }
  .detail-header {
    display: flex
    position: fixed
    top: 0
    z-index: 9
    width: 100%
    height: .86rem
    line-height: .86rem
    background-color: var(--color-bg)
  }
    .header-left {
      width: .64rem
      font-size: .4rem
    }
    .header-title {
      flex: 1
      padding-right: .64rem
      font-size: .32rem
    }
    
</style>