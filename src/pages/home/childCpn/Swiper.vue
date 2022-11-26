<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="isShow">
      <swiper-slide v-for="item of swiperlist" :key="item.id">
        <img class="swiper-image" :src="item.imgUrl" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
  
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperlist: Array,
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination', //pagination属性用于配置显示轮播图底部的页码圆点
        loop: true,  //loop属性用于设置在图片轮播完成后，另一边的图片切换到轮播完的一边，
        // 让图片能够循环轮播
        autoplay: 5000,
      },
    }
  },
  computed: {
    isShow () {
      return this.swiperlist.length
    }
  }
}
</script>
<!-- .wrapper高度的设置可以防止在图片未加载时，内容占据了图片的渲染位置，
导致图片加载完成后出现内容抖动的情况。.wrapper类名高度可以直接设置height: 32.5vw,可以使用
overflow: hidden; height: 0; padding-bottom: 31.25%;进行代替 -->
<!-- vw是指可视区屏幕宽度的百分比，100%等同于可视区屏幕宽度，不过vm单位在浏览器的兼容性不好 -->
<!-- scoped属性用于设置当前组件的CSS作用域，有scoped属性的style标签内的样式只对本组件的标签生效 -->
<!-- .wrapper >>> 是指能够穿透当前wrapper标签的CSS作用域结构，对其他的组件的标签生效 -->
<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active {
  background-color: #fff 
}
.wrapper {
  width: 100%
  overflow: hidden
  height: 0
  padding-bottom: 31.25%
}
  .swiper-image {
    width: 100%

  }

</style>