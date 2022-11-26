<template>
  <div class="detail-banner" @click="ImageClick" v-if="this.bannerData !== {}">
    <div class="banner-content">
      <img :src="this.bannerData.bannerImg" alt="">
      <div class="banner-title">
        {{this.bannerData.name}}
        <i class="banner-iconfont iconfont">&#xe600; {{imagenums}}</i>
      </div>
    </div>
    <feda-page>
      <detail-gallary v-show="isShowgallary">
        <swiper class="swiper-content" :options="swiperOption" 
        slot="gallary" v-if="swiperlist">
          <swiper-slide class="swiper-image" v-for="(image, index) of bannerData.gallaryImgs"
          :key="index">
            <img :src="image" alt="">
          </swiper-slide>
          <div class="swiper-pagination swiper-page" slot="pagination"></div>
        </swiper>
      </detail-gallary>
    </feda-page>
  </div>
</template>

<script>
import DetailGallary from 'common/Gallary-image'
import FedaPage from 'common/feda'
export default {
  name: 'detail-banner',
  props: {
    bannerData: {
      type: Object,
      default () {
        return {}
      }
    },
  },
  data () {
    return {
      isShowgallary: false,
      swiperOption: {
        pagination: '.swiper-pagination', //用于配置显示轮播图底部页码
        paginationType: 'fraction',
        loop: true,  //loop属性用于设置在图片轮播完成后，另一边的图片切换到轮播完的一边，
        // 让图片能够循环轮播
        observeParents: true,
        observer: true, //observeParents和observer属性用于监听当轮播组件DOM发生变化时,重新计算
        //轮播组件每次轮播的移动宽度
      },
    }
  },
  components: {
    DetailGallary,
    FedaPage,
  },
  methods: {
    ImageClick () {
      this.isShowgallary = !this.isShowgallary
    }
  },
  computed: {
    imagenums () {
      if (this.bannerData.gallaryImgs) {
        return this.bannerData.gallaryImgs.length 
      }
    },
    swiperlist () {
      if (this.bannerData.gallaryImgs) {
        return this.bannerData.gallaryImgs.length
      }
    }
  },
}
</script>
<!--  background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .9))可以
用于设置背景色渐变 -->
<!-- .detail-banner >>> .swiper-container穿透CSS作用域，修改swiper元素的属性overflow -->
<style scoped lang="stylus">
.detail-banner >>> .swiper-container
  overflow inherit
.banner-content {
  width: 100%
  height: 0
  overflow: hidden
  padding-bottom: 55%
}
.detail-banner img {
  width: 100%
}
.banner-title {
  position: relative
  top: -.68rem
  left: 0
  right: 0 
  color: #fff
  line-height: .48rem
  padding: .1rem .2rem
  background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .9))
}
.banner-iconfont {
  float: right
  padding: 0 .4rem
  border-radius: .24rem
  background: #000
}
.swiper-content {
  position: relative
  top: 50%
  transform: translateY(-50%)
}
.swiper-image {
  width: 100%
  height: 0
  padding-bottom: 100%
}
.swiper-image img {
  width: 100%
}
.swiper-page {
  position relative
  top: 1.5rem
  font-size: .28rem
  color: #fff
}
</style>