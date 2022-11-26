<template>
  <div class="home-icons">
    <swiper :options="swiperOption" v-if="iconlist.length">
      <swiper-slide  v-for="(page, index) of pages" :key="index">
        <div class="icons-Item" v-for="item of page" :key="item.id">
          <img class="swiper-image" :src="item.imgUrl" alt="">
          <p class="image-desc ellipsis">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
   iconlist: Array,
  },
  data () {
    return {
      swiperOption: {
        loop: true,
        autoplay: false,
      },
      
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconlist.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }

}
</script>

<style scoped lang="stylus">
.home-icons >>> .swiper-slide {
  width: 100%
  display: flex
  flex-wrap: wrap
}
.home-icons {
  width: 100%
  overflow: hidden
  height: 0
  margin: .24rem 0
  padding-bottom: 50%
}
.icons-Item {
  width: 25%
  height: 0
  padding-bottom: 25%
  text-align: center
}
.icons-Item img {
  width: 64%
  height: auto
}
.image-desc {
  padding: .2rem .1rem
  font-size: .32rem
  color: var(--color-text)
}
</style>