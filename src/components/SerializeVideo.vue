<template>
  <div ref="serialize" class="m-serialize" :style="`width: ${width}; height: ${height};`">
    <img :src="targetSrc" class="u-img" />
  </div>
</template>
<script>
export default {
  name: 'SerializeVideo',
  props: {
    imagesData: { // 序列化图片数据
      type: Array,
      default: () => {
        return []
      },
      required: true
    },
    width: { // 播放区域宽度
      type: String,
      default: '800px'
    },
    height: { // 播放区域高度
      type: String,
      default: '450px'
    }
  },
  data () {
    return {
      store: { // 存储预加载的img对象和img数量信息
        length: 0
      },
      targetSrc: require('images/banner/banner_0.jpg')
    }
  },
  computed: {
    imageSum () { // 序列化图片总数
      return this.imagesData.length
    }
  },
  mounted () {
    // this.onPreload()
    this.onSwiper(0)
    console.log('store:', this.store)
  },
  methods: {
    onSwiper (index) {
      setTimeout(() => {
        this.targetSrc = require(`images/banner/banner_${index}.jpg`)
        this.onSwiper((index + 1) % 425)
      }, 40)
    },
    onPreload () {
      // 图片序列预加载
      const that = this
      for (var i = 0; i <= 424; i++) {
        (function (index) {
          var img = new Image()
          img.onload = function () {
            // 存储预加载的图片对象
            that.store[index] = img // 或this
            that.store.length++
            if (that.store.length === 425) {
              that.onPlay()
            }
            console.log('this:', this === img) // true 函数运行时所在的对象即img
          }
          img.src = require(`images/banner/banner_${index}.jpg`)
          img.style.width = '100%'
          img.style.height = '100%'
          img.style.objectFit = 'cover'
          // img.classList.add('u-img')
        })(i)
      }
    },
    onPlay () {
      var index = 0
      // 依次append img对象
      const step = () => {
        if (this.store[index - 1]) {
          this.$refs.serialize.removeChild(this.store[index - 1])
        }
        this.$refs.serialize.appendChild(this.store[index])
        index++
        if (index <= 424) { // 最后一张图片时
          setTimeout(step, 40)
        } else {
          this.$refs.serialize.removeChild(this.store[index - 1])
          this.onPlay() // 循环播放
        }
      }
      setTimeout(step, 40)
    }
  }
}
</script>
<style lang="less" scoped>
.m-serialize {
  background: #000;
}
.u-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
