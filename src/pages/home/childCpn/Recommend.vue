<template>
  <div class="Recommend">
    <div class="recommend-title">热销推荐</div>
    <ul>
      <router-link tag="li" :to="'/detail/' + item.id" class="recommend-item" 
      v-for="item of recommendlist" :key="item.id">
        <div class="item-image">
          <img :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <h4 class="item-title">{{item.title}}</h4>
          <p class="item-desc ellipsis">{{item.desc}}</p>
          <button class="item-btn">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
   recommendlist: Array,
  },
  data () {
    return {
     
    }
  }

}
</script>

<style scoped lang="stylus">
.recommend-title {
  padding: .18rem .24rem
  font-size: .32rem
  color: #666
  font-weight: 700
  background-color: #eee
}

.recommend-item {
  box-sizing: border-box
  display: flex
  padding: .16rem .12rem .16rem .24rem
  width: 100%
}
.item-info {
  padding-right: .1rem
  min-width: 0
}
.item-image img {
  width: 2rem
  height: 1.6rem
  margin-right: .24rem
}
.item-title {
  font-size: .32rem
  font-weight: 700
  padding-bottom: .08rem
}
.item-desc {
  line-height: .36rem
  color: #999
}
.item-btn {
  line-height: .48rem
  margin-top: .16rem
  padding: 0 .3rem
  background-color: #ff9300
  color: #fff
  border-radius: .1rem 
}
</style>