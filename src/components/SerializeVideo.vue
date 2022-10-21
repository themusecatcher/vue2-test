<template>
  <div ref="serialize" class="serialize" :style="`width: ${width}px; height: ${height}px;`">
    <img :src="targetSrc" class="img" :style="`width: ${width}px; height: ${height}px; object-fit: cover;`" />
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
      type: Number,
      default: 800
    },
    height: { // 播放区域高度
      type: Number,
      default: 450
    }
  },
  data () {
    return {
      store: { // 存储预加载的img对象和img数量信息
        length: 0
      },
      targetSrc: require('images/1.jpg')
    }
  },
  computed: {
    imageSum () { // 序列化图片总数
      return this.imagesData.length
    }
  },
  mounted () {
    // this.onPreload()
    // this.onSwiper(1)
    console.log('store:', this.store)
  },
  methods: {
    onSwiper (index) {
      setTimeout(() => {
        this.targetSrc = require(`images/${index}.jpg`)
        this.onSwiper(index % 10 + 1)
      }, 42)
    },
    onPreload () {
      // 图片序列预加载
      const that = this
      for (var i = 1; i <= this.imageSum; i++) {
        (function (index) {
          var img = new Image()
          img.onload = function () {
            // 存储预加载的图片对象
            that.store[index] = img // 或this
            that.store.length++
            if (that.store.length === that.imageSum) {
              that.onPlay()
            }
            console.log('this:', this === img) // true 函数运行时所在的对象即img
          }
          img.src = require(`images/${index}.jpg`)
          img.style.width = that.width + 'px'
          img.style.height = that.height + 'px'
          img.style.objectFit = 'cover'
          console.log('store:', that.store)
        })(i)
      }
    },
    onPlay () {
      var index = 1
      // 依次append img对象
      const step = () => {
        if (this.store[index - 1]) {
          this.$refs.serialize.removeChild(this.store[index - 1])
        }
        this.$refs.serialize.appendChild(this.store[index])
        index++
        if (index <= this.imageSum) { // 最后一张图片时
          setTimeout(step, 42)
        } else {
          this.$refs.serialize.removeChild(this.store[index - 1])
          this.onPlay() // 循环播放
        }
      }
      setTimeout(step, 42)
    }
  }
}
</script>
<style lang="less" scoped>
.serialize {
  background: #000;
}
.loading {
  position: absolute;
  height: 8px; width: 150px;
  border: 1px solid #eee;
  background: linear-gradient(to top, #eee, #eee);
  background-size: 0 100%;
  transition: background-size .1s;
  left: 0; top: 0; right: 0; bottom: 0;
  margin: auto;
}
.loading::before {
  content: attr(data-percent)'%';
  position: absolute;
  left: 0; top: -1.5em;
  font-size: 12px;
  color: #eee;
}
</style>
