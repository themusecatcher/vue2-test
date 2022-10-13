<template>
  <div ref="serialize" class="serialize" :style="`width: ${width}px; height: ${height}px;`">
    <div ref="loading" class="loading" data-percent="0"></div>
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
    },
  },
  data () {
    return {
      store: { // 存储预加载的DOM对象和长度信息
        length: 0
      }
    }
  },
  computed: {
    imageSum () { // 序列化图片总数
      return this.imagesData.length
    }
  },
  created () {
    this.onPreload()
    console.log('store:', this.store)
  },
  methods: {
    onPreload () {
      // 图片序列预加载
      for ( var i = 1; i <= this.imageSum; i++) {
        var img = new Image()
        // img.onload = () => {
        //   console.log('this:', this)
        //   this.store.length++
        //   // 存储预加载的图片对象
        //   this.store[i] = this
        //   console.log('store:', this.store)
        //   this.onPlay()
        // }
        // img.onerror = () => {
        //   console.log('this:', this)
        //   this.store.length++
        //   this.onPlay()
        // }
        img.src = `images/${i}.jpg`
        this.store.length++
        this.store[i] = img
        this.onPlay()
      }
    },
    onPlay () {
      // loading进度
      var percent = Math.round(100 * this.store.length / this.imageSum)
      // this.$refs.loading.setAttribute('data-percent', percent)
      console.log('loading:', this.$refs.loading)
      // this.$refs.loading.style.backgroundSize = percent + '% 100%'
      // 全部加载完毕，无论成功还是失败
      if (percent === 100) {
        var index = 1
        this.$refs.serialize.innerHTML = ''
        // 依次append图片对象
        var step = () => {
          console.log('store:', this.store)
          if (this.store[index]) {
            this.$refs.serialize.removeChild(this.store[index])
          }
          this.$refs.serialize.appendChild(this.store[index])
          // 序列增加
          index++
          // 如果超过最大限制
          if (index <= this.imageSum) {
            setTimeout(step, 500)
          } else {
            // 本段播放结束回调
            // 我这里就放一个重新播放的按钮
            this.$refs.serialize.insertAdjacentHTML('beforeEnd', '<button onclick="play()">再看一遍英姿</button>')
          }
        }
        // 等100%动画结束后执行播放
        setTimeout(step, 100)
      }
    }
  }
}
</script>
<style lang="less" scoped>
.serialize {
  display: inline-block;
  background: #000;
  position: relative;
}
.serialize > img {
  position: absolute;
  width: 100%; height: 100%;
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