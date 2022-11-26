<template>
  <div class="city-select" ref="wrapper">
    <div class="city-content">
      <div class="city-title">当前城市</div>
      <div class="city-current">
        <button>{{this.City}}</button>
      </div>
      <div class="city-title">热门城市</div>
      <div class="city-hot">
        <button v-for="(item, index) of hotCities" 
        :key="item.id" @click="btnClick(item.name)">{{item.name}}</button>
      </div>
      <div class="city-list" v-for="(value, key) of Cities" :key="key" :ref="key">
        <div class="city-title">{{key}}</div>
        <ul>
          <li class="city-list-content" v-for="city of value" 
          :key="city.id" @click="btnClick(city.name)">{{city.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'city-list',
  props: {
    hotCities: Array,
    Cities: Object,
    letter: String,
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
    // console.log(this.$refs.wrapper);
  },
  watch: {
    letter () {
      if (this.letter) {
        // console.log(this.$refs[this.letter]);
        this.scroll.scrollToElement(this.$refs[this.letter][0])
      }
    }
  },
  methods: {
    ...mapMutations(['changeCity']),
    btnClick (city) {
      // this.$store.dispatch('changeCity', city)
      // this.$store.commit('changeCity', city)
      this.changeCity(city)
    }
  },
  computed: {
    ...mapState({
      City: 'selectCity'
    })
  },
  updated () {
    this.scroll.refresh()
  },
  
}
</script>

<style scoped lang="stylus">
.city-select {
  overflow: hidden
  height: calc(100vh - 1.58rem)
}
.city-content {
  color: var(--color-text)
}
.city-title {
  padding: .16rem .32rem
  font-weight: 600
  background-color: #ddd
}
.city-current {
  box-sizing: border-box
  width: 100%
  padding: .16rem .12rem
}
.city-content button {
  width: 29%
  padding: .04rem 0
  background: #fff
  border: .02rem solid #999
}
.city-hot {
  display: flex
  flex-wrap: wrap
  margin-bottom: .24rem
}
.city-hot button {
  margin: .2rem 0 0 .12rem
}
.city-list-content {
  padding: .2rem
  border-bottom: .02rem solid #ccc 
}
</style>