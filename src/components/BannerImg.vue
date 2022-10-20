<template>
  <div class="m-banner-wrap" v-if="bannerData.length">
    <div class="m-banner-list">
      <div
        :class="['u-banner-item', index%2 === 0 ? 'zoomin':'zoomout']"
        v-for="(item, index) in bannerData"
        :key="index"
        v-show="index===activeIndex"
        :style="`background: url(${item.listImage}) no-repeat center; background-size: cover;`"
        @mouseenter="onStop" @mouseleave="onStart">
      </div>
    </div>
    <div class="m-dot-list" v-if="bannerData.length > 1">
      <div v-for="n of bannerData.length" :key="n" :class="['u-dot-item', {active: (n-1)===activeIndex}]" @mouseenter="onEnter(n-1)">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Banner',
  props: {
    bannerData: { // banner数组
      type: Array,
      default: () => {
        return []
      }
    },
    interval: { // 切换间隔ms
      type: Number,
      default: 3000
    }
  },
  data () {
    return {
      activeIndex: 0,
      timer: null
    }
  },
  mounted () {
    setTimeout(() => {
      this.onStart()
    }, 1000)
  },
  methods: {
    onStart () {
      clearInterval(this.timer)
      if (this.bannerData.length > 1) {
        this.timer = setInterval(this.onMove, this.interval)
      }
    },
    onStop () {
      clearInterval(this.timer)
    },
    onEnter (index) {
      clearInterval(this.timer)
      this.activeIndex = index
      this.onStart()
    },
    onMove () {
      if (this.activeIndex === this.bannerData.length - 1) {
        this.activeIndex = 0
      } else {
        this.activeIndex++
      }
    }
  },
  beforeDestroy () {
    clearInterval(this.timer)
    this.timer = null
  }
}
</script>
<style lang="less" scoped>
.m-banner-wrap {
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  z-index: 9;
  .m-banner-list {
    height: 100%;
    .u-banner-item {
      height: 100%;
      width: 100%;
    }
    .zoomin { // 放大
      -webkit-animation: zoomin 10s;
      animation: zoomin 10s;
    }
    @keyframes zoomin {
      0% {
        transform: scale(1);
      }
      100% {
        transform: scale(1.2);
      }
    }
    .zoomout { // 缩小
      -webkit-animation: zoomout 10s;
      animation: zoomout 10s;
    }
    @keyframes zoomout {
      0% {
        transform: scale(1.2);
      }
      100% {
        transform: scale(1);
      }
    }
  }
  .m-dot-list {
    width: 100%;
    line-height: 4px;
    position: absolute;
    bottom: 65px;
    text-align: center;
    .u-dot-item { // 圆点样式
      display: inline-block;
      width: 36px;
      height: 4px;
      background: #E3E3E3;
      border-radius: 1px;
      vertical-align: bottom;
      cursor: pointer;
      &:not(:last-child) {
        margin-right: 10px;
      }
    }
    .active { // 圆点选中样式
      background: @themeColor;
    }
  }
}
</style>
