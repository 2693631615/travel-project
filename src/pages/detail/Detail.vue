<template>
  <div class="detail-page">
    <detail-header :title="title"></detail-header>
    <detail-banner :bannerData="bannerdata"></detail-banner>
    <div class="scroll-content"></div>
  </div>
  
</template>

<script>
import DetailBanner from './childCpn/Detail-banner'
import DetailHeader from './childCpn/Detail-header';
import Axios from 'axios';

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    
  },
  data () {
    return {
      bannerdata: {},
      title: '',
    }
  },
  methods: {
    getDetaildata () {
      Axios.get('api/detail.json').then ((res) => {
        // console.log(res);
        if(res.data.ret && res.data.data) {
          const data = res.data.data
          this.bannerdata = {
            name: data.sightName,
            bannerImg: data.bannerImg,
            gallaryImgs: data.gallaryImgs
          },
          this.title = data.title
        }
        // console.log(this.bannerdata);
      }).catch(err => console.log(err))
    }
  },
  mounted () {
    this.getDetaildata()
  }


}
</script>

<style scoped>
.scroll-content {
  height: 1000px;
}
</style>