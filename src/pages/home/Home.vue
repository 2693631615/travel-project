<template>
  <div class="home">
    <Header></Header>
    <HomeSwiper :swiperlist="Swiperlist"></HomeSwiper>
    <HomeIcons :iconlist="Iconlist"></HomeIcons>
    <home-recommend :recommendlist="Recommendlist"></home-recommend>
    <home-weekend :weekendlist="Weekendlist"></home-weekend>
  </div>
</template>

<script>
import Header from './childCpn/Header'
import HomeSwiper from './childCpn/Swiper'
import HomeIcons from './childCpn/Icons'
import HomeRecommend from './childCpn/Recommend'
import HomeWeekend from './childCpn/weekend'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      Swiperlist: [],
      Iconlist: [],
      Recommendlist: [],
      Weekendlist: [],
      Currentcity: '',
    }
  },
  computed: {
    ...mapState(['selectCity'])
  },
  components: {
    Header,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend,
  },
  methods: {
    getHomedata () {
      axios.get('/api/index.json?city=' +  this.selectCity).then(res => {
        // console.log(res);
        if(res.data.ret && res.data.data){
        const data = res.data.data
        this.Swiperlist = data.swiperList
        this.Iconlist = data.iconList
        this.Recommendlist = data.recommendList
        this.Weekendlist = data.weekendList
        }
      })
    }
  },
  mounted () {
    this.Currentcity = this.selectCity
    this.getHomedata()
  },
  activated () {
    if(this.Currentcity !== this.selectCity) {
      this.getHomedata()
      this.Currentcity = this.selectCity
    }
  }
}
</script>

<style>
</style>