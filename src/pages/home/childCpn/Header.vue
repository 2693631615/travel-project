<template>
  <div class="Header">
    <div class="header-left left">
    <span class="iconfont">&#xe629;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xeafe;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link class="header-right right" to="/city">
      <div class="select-city ellipsis">{{this.selectCity}}
        <span class="iconfont">&#xeb6d;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['selectCity'])
  }
}
</script>
<!-- 设计图为2倍尺寸设计图，所以在开发中应该将测量到的设计图的数据值乘以1/2 -->
<!-- 在移动端中通常使用vm,vh,rem作为单位，根据css初始化的文件，1em = html font-size = 50px -->
<style scoped lang="stylus">
  .Header {
    display: flex
    height: .86rem
    line-height: .86rem
    background-color: var(--color-bg)
    color: #fff
  }
    .header-left {
      width: .64rem
      text-align: center
    }
    .header-left span {
      font-size: .4rem
    }
    .header-input {
      flex: 1
      line-height: .62rem
      margin: .12rem 
      border-radius: .1rem
      background-color: #fff
      color: #999;
      padding-left: .2rem
    }
    .header-input span {
      font-size: .36rem
    }
    .header-right {
      display: flex
      justify-content: center
      width: 1.28rem
      text-align: center
      color: #fff
    }
    select-city {
      width: 100%
    }
      .header-right span {
        font-size: .24rem
        
      }
</style>