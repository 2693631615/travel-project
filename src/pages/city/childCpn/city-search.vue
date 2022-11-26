<template>
  <div class="city-search">
    <div class="search-input">
      <input class="city-input" type="text" v-model="keyword" placeholder="输入城市名或拼音">
    </div>
    <div class="search-content" v-show="keyword" ref="search">
      <ul>
        <li class="city-name" v-for="item of Citylist" 
        :key="item.id" @click="liClick(item.name)">{{item.name}}</li>
        <li class="city-name" v-show="isShow">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'city-search',
  props: {
    Cities: Object,
  },
  data () {
    return {
      keyword: '',
      timer: null,
      Citylist: []
    }
  },
  computed: {
    isShow () {
      return !this.Citylist.length
    }
  },
  methods: {
    liClick (city) {
      // this.$store.dispatch('changeCity', city)
      this.$store.commit('changeCity', city) //可以直接跳过actions对象对异步操作的处理
      //给mutations传送事件对共享数据进行处理
      return this.keyword = ''
    }
  },
  watch: {
    keyword () {
      // console.log(this.keyword);
      if(this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        const result = []
        for(let i in this.Cities) {
          this.Cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || 
            value.name.indexOf(this.keyword) > -1) {
              result.push(value) //这里直接把value的值push进变量Citylist，和先把值push进result
              //再赋值给Citylist有什么区别？为什么第一种会直接报错
            }
          })
        }
        this.Citylist = result
      }, 100)
      this.scroll.refresh()
    }
  },
  mounted () {
    if (this.$refs.search) {
      this.scroll = new BScroll(this.$refs.search)
    }
  }

}
</script>
<!-- 设计图为2倍尺寸设计图，所以在开发中应该将测量到的设计图的数据值乘以1/2 -->
<!-- 在移动端中通常使用vm,vh,rem作为单位，根据css初始化的文件，1em = html font-size = 50px -->
<style scoped lang="stylus">
  .city-search {
    height: .72rem
    padding: 0 .1rem
    background-color: var(--color-bg)
    color: var(--color-text)
  }
    .search-input input{
      box-sizing: border-box
      width: 100%
      height: .62rem
      line-height: .62rem
      border-radius: .1rem
      text-align: center
      color: #999
      background-color: #fff
      padding: 0 .2rem
    }
    .city-input::-webkit-input-placeholder {
      font-weight: 600
      color: #888
    }
    .search-content {
      position: absolute
      z-index: 1
      top: 1.48rem
      left: 0
      right: 0
      bottom: 0
      width: 100%
      overflow: hidden
    }
    .search-content ul {
      margin: 0 .06rem
      border: .06rem solid #00bcd4
      border-top: .04rem solid #fff
      border-radius: .1rem 
    }
    .city-name {
      line-height: .56rem
      border-bottom: .02rem solid #999
      background-color: #fff
      text-indent: .24rem
      color: var(--color-text)
      font-weight: 600
    }
</style>