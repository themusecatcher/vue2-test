<template>
  <div class="m-video" :style="`width: ${width}px; height: ${height}px;`">
    <video
      ref="veo"
      :class="[originPlay ? 'u-video':'u-video u-cursor']"
      :src="videoUrl"
      :poster="videoCover"
      :width="width"
      :height="height"
      :autoplay="autoplay"
      :controls="!originPlay&&controls"
      :loop="loop"
      :muted="muted"
      :preload="preload">
      您的浏览器不支持Video标签。
    </video>
    <svg :class="[vplay ? 'u-play-btn u-cursor':'u-disappear']" :style="`width: ${playWidth}px; height: ${playWidth}px;`" @click="clickPlay" viewBox="0 0 24 24">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V6.75Z"></path>
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.25 12L9.75 8.75V15.25L15.25 12Z"></path>
    </svg>
  </div>
</template>
<script>
export default {
  name: 'Video',
  props: {
    videoUrl: { // 视频文件url
      type: String,
      default: ''
    },
    videoCover: { // 视频封面链接
      type: String,
      default: ''
    },
    width: { // 视频播放器宽度
      type: Number,
      default: 800
    },
    height: { // 视频播放器高度
      type: Number,
      default: 450
    },
    autoplay: { // 视频就绪后是否马上播放
      type: Boolean,
      default: false
    },
    controls: { // 是否向用户显示控件，比如播放按钮
      type: Boolean,
      default: false
    },
    loop: { // 视频播放完成后，是否循环播放
      type: Boolean,
      default: false
    },
    muted: { // 是否静音
      type: Boolean,
      default: false
    },
    preload: { // 是否在页面加载后载入视频，如果设置了autoplay属性，则preload将被忽略；
      type: String,
      default: 'auto' // auto:一旦页面加载，则开始加载视频; metadata:当页面加载后仅加载视频的元数据 none:页面加载后不应加载视频
    },
    playWidth: { // 播放按钮的边长
      type: Number,
      default: 72
    }
  },
  data () {
    return {
      originPlay: true,
      vplay: true
    }
  },
  mounted () {
    if (this.videoUrl) {
      this.$nextTick(() => {
        this.$refs.veo.addEventListener('pause', this.onPause)
        this.$refs.veo.addEventListener('playing', this.onPlaying)
      })
    }
  },
  methods: {
    onPause () {
      this.vplay = true
      this.$once('hook:beforeDestroy', function () {
        removeEventListener('pause', this.onPause)
      })
    },
    onPlaying () {
      this.vplay = false
      // 自动清理自己，避免内存泄漏
      this.$once('hook:beforeDestroy', function () {
        removeEventListener('playing', this.onPlaying)
      })
    },
    clickPlay () {
      if (this.originPlay) {
        this.originPlay = false
      }
      this.$refs.veo.play()
      this.vplay = false
    }
  }
}
</script>
<style lang="less" scoped>
.m-video {
  margin: 0 auto;
  position: relative;
}
.u-video {
  background-color: #000;
}
.u-cursor {
  cursor: pointer;
}
.u-play-btn {
  fill: none;
  color: #FFF;
  opacity: 0.7;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  transition: all .3s;
  &:hover {
    opacity: 1;
  }
}
.u-disappear {
  display: none;
}
</style>