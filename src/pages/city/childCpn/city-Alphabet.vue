<template>
  <div class="Alphabetic-list">
    <ul>
      <li v-for="key of letters" @click="letterClick" :key="key"
      @touchstart.prevent="TouchStart" @touchmove="TouchMove"
      @touchend="TouchEnd" :ref="key">{{key}}</li>
    </ul>
    <!-- prevent修饰符可以阻止绑定事件的默认行为 -->
  </div>
</template>

<script>
export default {
  name: 'city-Alphabet',
  props: {
    alphabetList: Object,
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null,
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop  //获取字母a的DOM元素结构到顶部的距离
    // console.log(this.startY);
  },
  methods: {
    letterClick (e) { //当点击一个元素时，可以获取一个参数e,包含着当前点击元素的各种属性和方法
      console.log(e);
      this.$emit('change', e.target.innerText)
    },
    TouchStart () {
    this.touchStatus = true
    },
    TouchMove (e) {
    //  console.log(e);
      if ( this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        } 
        //通过定时器和在设定时间内触发同一个定时器则使用clearTimeout清除掉上一个定时器达到
        //函数节流的效果
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79 //获取手指在字母列表上滑动时距离顶部的距离
          console.log(touchY);
          const index = Math.floor((touchY - this.startY) / 19)
          if(index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 50)
      }
    },
    TouchEnd () {
      this.touchStatus = false
    }
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.alphabetList) {
        letters.push(i)
      }
      return letters
    }
  },
  
}
</script>

<style scoped lang="stylus">
.Alphabetic-list {
  display: flex
  justify-content: center
  align-items: center
  position: fixed
  top: 1.58rem
  right: 0 
  width: .36rem
  height: calc(100% - 1.58rem)
}

.Alphabetic-list li {
  padding: .06rem 0
  color: var(--color-text)
}
</style>