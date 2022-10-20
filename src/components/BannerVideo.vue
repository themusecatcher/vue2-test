<template>
  <div class="m-banner-wrap" ref="banner">
    <video class="u-banner-video" :poster="bannerData.listImage" :src="bannerData.listVideoUrl" autoplay loop muted>您的浏览器不支持video标签。</video>
    <transition name="fade">
      <div class="m-tip" v-show="showTip">
        <img src="~images/mouse.svg" class="u-icon" />
        <p class="u-tip">向下划动</p>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'Banner',
  props: {
    bannerData: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      showTip: true
    }
  },
  mounted () {
    window.onscroll = () => {
      var bannerRect = this.$refs.banner.getBoundingClientRect()
      if (Math.abs(bannerRect.top * 2) >= bannerRect.height) {
        this.showTip = false
      } else {
        this.showTip = true
      }
    }
  }
}
</script>
<style lang="less" scoped>
.m-banner-wrap {
  width: 100%;
  height: 100vh;
  min-width: 1200px;
  margin: 0 auto;
  position: absolute;
  z-index: 99;
  .u-banner-video {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  // 渐变过渡效果
  .fade-enter-active, .fade-leave-active {
    transition: all 1s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .m-tip {
    width: 100px;
    text-align: center;
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    .u-icon {
      width: 18px;
      height: 30px;
      margin-right: 6px;
      vertical-align: bottom;
    }
    .u-tip {
      display: inline-block;
      vertical-align: top;
      font-size: 16px;
      font-weight: 400;
      color: #FFFFFF;
      line-height: 30px;
    }
  }
}
</style>
