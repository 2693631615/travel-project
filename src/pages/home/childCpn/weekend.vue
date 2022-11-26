<template>
  <div class="Weekend">
    <div class="weekend-title">周末去哪儿</div>
    <ul>
      <li class="weekend-item" v-for="item of weekendlist" :key="item.id">
        <div class="item-image">
          <img :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <h4 class="item-title">{{item.title}}</h4>
          <p class="item-desc ellipsis">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeWeekend',
  props: {
   weekendlist: Array,
  },
  

}
</script>

<style scoped lang="stylus">
.weekend-title {
  margin: .2rem 0 .12rem
  padding: .18rem .24rem
  font-size: .32rem
  color: #666
  font-weight: 700
  background-color: #eee
}
.weekend-item {
  width: 100%
  padding-bottom: .24rem
}
.item-image {
  overflow: hidden
  height: 0
  padding-bottom: 38%
}
.item-image img {
  width: 100%
  height: auto
}
.item-title {
  font-size: .32rem
  font-weight: 700
  line-height: .48rem
}
.item-desc {
  line-height: .4rem
  color: #999
}
.item-info {
  padding: .1rem .24rem 0
}
</style>