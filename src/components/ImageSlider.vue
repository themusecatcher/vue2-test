<template>
  <!-- 方法1：使用 will-change: transform; translateX(-${left}px); -->
  <!-- <div class="m-slider" :style="`width: ${imageWidth}px;`" @mouseenter="onStop" @mouseleave="onStart">
    <div :class="{ 'transition': transition }" :style="`width: ${width}px; will-change: transform; transform: translateX(${-left}px);`"> -->
  <!-- 方法2：使用position: relative;和position: absolute; left: ${-left}px; -->
  <div class="m-slider" :style="`position: relative; width: ${imageWidth}px; height: ${imageHeight + 36}px;`" @mouseenter="onStop" @mouseleave="onStart">
    <div :class="{ 'transition': transition }" :style="`width: ${width}px; position: absolute; left: ${-left}px;`">
      <div
        v-for="(item, index) in imageData"
        :key="index"
        :style="`width: ${imageWidth}px;`"
        class="m-image">
        <img v-lazy="getDefault(item.imgUrl)" :alt="item.title" :style="`width: ${imageWidth}px; height: ${imageHeight}px;`" class="u-img"/>
        <p class="u-img-title" :title="item.title">{{ item.title }}</p>
      </div>
      <div class="m-image" :style="`width: ${imageWidth}px;`">
        <img v-lazy="getDefault(imageData[0].imgUrl)" :alt="imageData[0].title" :style="`width: ${imageWidth}px; height: ${imageHeight}px;`" class="u-img"/>
        <p class="u-img-title" :title="imageData[0].title">{{ imageData[0].title }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import VueLazyLoad from 'vue-lazyload' // 图片懒加载插件使用版本v1.3.3
Vue.use(VueLazyLoad)
export default {
  name: 'ImageSlider',
  props: {
    imageData: { // 轮播图片数组
      type: Array,
      default: () => {
        return []
      }
    },
    interval: { // 滑动轮播间隔
      type: Number,
      default: 3000
    },
    imageWidth: { // 图片宽度
      type: Number,
      default: 400
    },
    imageHeight: { // 图片高度
      type: Number,
      default: 300
    }
  },
  data () {
    return {
      left: 0, // 滑动偏移值
      transition: false, // 暂停时未完成滑动的过渡标志
      slideTimer: null, // 自动切换定时器
      moveTimer: null // 向左滑动定时器
    }
  },
  computed: {
    width () { // 容器宽度：(图片数组长度+1) * 图片宽度
      return (this.imageData.length + 1) * this.imageWidth
    },
    len () {
      return this.imageData.length || 0
    }
  },
  mounted () {
    window.onfocus = () => { // 页面激活状态
      this.onStart()
    }
    window.onblur = () => { // 页面未激活状态
      this.onStop()
    }
    this.onStart()
  },
  methods: {
    getDefault (src) { // 获取懒加载默认图
      return {
        src: src,
        error: require('../assets/images/default.png'),
        loading: require('../assets/images/default.png')
      }
    },
    onStart () {
      if (this.len > 1) { // 超过一条时滑动
        this.transition = false
        this.onAutoSlide() // 自动滑动轮播
        console.log('imageSlider start')
      }
    },
    onStop () {
      clearTimeout(this.slideTimer)
      clearInterval(this.moveTimer)
      this.sliderTimer = null
      this.moveTimer = null
      this.transition = true
      this.left = Math.ceil(this.left / this.imageWidth) * this.imageWidth // ceil：向上取整，floor：向下取整
      console.log('imageSlider stop')
    },
    onAutoSlide () {
      this.slideTimer = setTimeout(() => {
        const target = this.left % (this.len * this.imageWidth) + this.imageWidth
        this.autoMoveLeft(target)
      }, this.interval)
    },
    // 滑动使用setInterval延时调用
    autoMoveLeft (target) { // 自动切换，向左滑动效果
      if (this.left === this.len * this.imageWidth) { // 最后一张时，重置left
        this.left = 0
      }
      this.moveTimer = setInterval(() => {
        if (this.left >= target) {
          clearInterval(this.moveTimer)
          this.moveTimer = null
          this.onAutoSlide() // 自动间隔切换下一张
        } else {
          var step = Math.ceil((target - this.left) / 10) // 越来越慢的滑动过程
          this.left += step
        }
      }, 25)
    },
    beforeDestroy () {
      clearTimeout(this.slideTimer)
      clearInterval(this.moveTimer)
      this.slideTimer = null
      this.moveTimer = null
    }
  }
}
</script>
<style lang="less" scoped>
@themeColor: #1890FF;
.m-slider {
  margin: 0 auto;
  overflow: hidden;
  .transition {
    transition: transform 0.3s ease-out;
  }
  .m-image {
    display: inline-block;
    .u-img {
      vertical-align: bottom; // 消除img标签底部的5px
      cursor: pointer;
    }
    .u-img-title {
      font-size: 18px;
      color: #333;
      line-height: 36px;
      text-align: left;
      cursor: pointer;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      &:hover {
        color: @themeColor;
      }
    }
  }
}
</style>
