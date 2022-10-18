<template>
  <div class="m-slider" :style="`width: ${imageWidth}px;`" @mouseover="onStop" @mouseleave="onStart">
    <div :class="{'transition': transition}" :style="`width: ${width}px; will-change: transform; transform: translateX(${-left}px);`">
      <div
        v-for="(item, index) in imageData"
        :key="index"
        :style="`width: ${imageWidth}px;`"
        class="m-image">
        <img v-lazy="getDefault(item && item.imgUrl)" :key="item && item.imgUrl" :alt="item && item.title" :style="`width: ${imageWidth}px; height: ${imageHeight}px;`" class="u-img"/>
        <div class="m-title" :title="item && item.title">
          <p class="u-title">{{ item && item.title || '--' }}</p>
          <p class="u-date">2022/07/12</p>
        </div>
      </div>
      <div class="m-image" :style="`width: ${imageWidth}px;`">
        <img v-lazy="getDefault(imageData[0] && imageData[0].imgUrl)" :key="imageData[0] && imageData[0].imgUrl" :alt="imageData[0]&&imageData[0].title" :style="`width: ${imageWidth}px; height: ${imageHeight}px;`" class="u-img"/>
        <div class="m-title" :title="imageData[0]&&imageData[0].title">
          <p class="u-title">{{ imageData[0] && imageData[0].title || '--' }}</p>
          <p class="u-date">2022/07/12</p>
        </div>
      </div>
    </div>
    <svg class="arrow-left" :style="`top: ${imageHeight/2}px;`" @click="goRight((activeSwitcher+1)%len*imageWidth)" viewBox="64 64 896 896" data-icon="left-circle" aria-hidden="true" focusable="false"><path d="M603.3 327.5l-246 178a7.95 7.95 0 0 0 0 12.9l246 178c5.3 3.8 12.7 0 12.7-6.5V643c0-10.2-4.9-19.9-13.2-25.9L457.4 512l145.4-105.2c8.3-6 13.2-15.6 13.2-25.9V334c0-6.5-7.4-10.3-12.7-6.5z"></path><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path></svg>
    <svg class="arrow-right" :style="`top: ${imageHeight/2}px;`" @click="goLeft(activeSwitcher%(len+1)*imageWidth)" viewBox="64 64 896 896" data-icon="right-circle" aria-hidden="true" focusable="false"><path d="M666.7 505.5l-246-178A8 8 0 0 0 408 334v46.9c0 10.2 4.9 19.9 13.2 25.9L566.6 512 421.2 617.2c-8.3 6-13.2 15.6-13.2 25.9V690c0 6.5 7.4 10.3 12.7 6.5l246-178c4.4-3.2 4.4-9.8 0-13z"></path><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path></svg>
    <div class="m-switch">
      <div
        @click="onSwitch(n)"
        :class="['u-rect', {'active': activeSwitcher === n }]"
        v-for="n in len"
        :key="n">
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad) // 图片懒加载插件
export default {
  name: 'Carousel',
  props: {
    imageData: { // 轮播图片数组
      type: Array,
      default: () => {
        return []
      }
    },
    interval: { // 自动滑动轮播间隔
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
      toLeft: true, // 左滑标志，默认左滑
      left: 0, // 滑动偏移值
      transition: false, // 暂停时为完成滑动的过渡标志
      slideTimer: null, // 轮播切换定时器
      moveTimer: null, // 向左滑动效果定时器
      autoTimer: null, // 首次自动滑动定时器
      switch: false // 是否在进行跳转切换，用于区别箭头或自动切换（false）和跳转切换（true）
    }
  },
  computed: {
    width () { // 容器宽度：(图片数组长度+1) * 图片宽度
      return (this.imageData.length + 1) * this.imageWidth
    },
    len () { // 数组长度
      return this.imageData.length || 0
    },
    activeSwitcher () { // 当前展示图片标志
      return (this.toLeft ? Math.ceil(this.left / this.imageWidth) % this.len : Math.floor(this.left / this.imageWidth) % this.len) + 1
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
    onSwitch (n) { // 切换图片
      if (n < this.activeSwitcher) { // 往右滑动
        this.switch = true // 跳转切换标志
        const target = (n - 1) * this.imageWidth
        this.goRight(target)
      }
      if (n > this.activeSwitcher) { // 往左滑动
        this.switch = true // 跳转切换标志
        const target = (n - 1) * this.imageWidth
        this.goLeft(target)
      }
    },
    onStart () {
      if (this.len > 1) { // 超过一条时滑动
        this.toLeft = true // 重置左滑标志
        this.transition = false
        this.onAutoSlide() // 自动滑动轮播
        console.log('imageSlider start')
      }
    },
    onStop () {
      clearTimeout(this.autoTimer)
      clearTimeout(this.slideTimer)
      this.autoTimer = null
      this.slideTimer = null
      if (this.toLeft) { // 左滑箭头移出时
        this.onStopLeft()
      } else {
        this.onStopRight()
      }
      console.log('imageSlider stop')
    },
    onStopLeft () { // 停止往左滑动
      clearInterval(this.moveTimer)
      this.moveTimer = null
      this.transition = true
      this.left = Math.ceil(this.left / this.imageWidth) * this.imageWidth // ceil：向上取整，floor：向下取整
    },
    onStopRight () { // 停止往右滑动
      clearInterval(this.moveTimer)
      this.moveTimer = null
      this.transition = true
      this.left = Math.floor(this.left / this.imageWidth) * this.imageWidth // ceil：向上取整，floor：向下取整
    },
    onAutoSlide () {
      this.slideTimer = setTimeout(() => {
        // 或者使用 this.activeSwitcher % (this.len + 1) * this.imageWidth
        const target = this.left % (this.len * this.imageWidth) + this.imageWidth
        this.autoMoveLeft(target)
      }, this.interval)
    },
    goLeft (target) { // 点击右箭头，往左滑动
      this.toLeft = true // 向左滑动
      this.onStopLeft()
      this.transition = false
      this.moveLeft(target)
    },
    goRight (target) { // 点击左箭头，往右滑动
      this.toLeft = false // 非向左滑动
      this.onStopRight()
      this.transition = false
      this.moveRight(target)
    },
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
    moveLeft (target) { // 箭头切换或跳转切换，向左滑动效果
      if (this.left === this.len * this.imageWidth) { // 最后一张时，重置left
        this.left = 0
      }
      this.moveTimer = setInterval(() => {
        if (this.left >= target) {
          clearInterval(this.moveTimer)
          this.moveTimer = null
          if (this.switch) { // 跳转切换，完成后自动滑动
            this.switch = false
            this.onStart()
          }
        } else {
          var step = Math.ceil((target - this.left) / 10) // 越来越慢的滑动过程
          this.left += step
        }
      }, 25)
    },
    moveRight (target) { // 箭头切换或跳转切换，向右滑动效果
      if (this.left === 0) { // 第一张时，重置left
        this.left = this.len * this.imageWidth
      }
      this.moveTimer = setInterval(() => {
        if (this.left <= target) {
          clearInterval(this.moveTimer)
          this.moveTimer = null
          if (this.switch) { // 跳转切换，完成后自动滑动
            this.switch = false
            this.onStart()
          }
        } else {
          var step = Math.floor((target - this.left) / 10) // 越来越慢的滑动过程
          this.left += step
        }
      }, 25)
    },
    beforeDestroy () {
      clearTimeout(this.slideTimer)
      clearInterval(this.moveTimer)
      clearInterval(this.autoTimer)
      this.slideTimer = null
      this.moveTimer = null
      this.autoTimer = null
    }
  }
}
</script>
<style lang="less" scoped>
@themeColor: #1890FF;
.m-slider {
  margin: 0 auto;
  position: relative;
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
    .m-title {
      background: #F2F4F8;
      padding: 20px;
      .u-title {
        height: 54px;
        font-size: 18px;
        font-weight: 500;
        color: #333333;
        line-height: 27px;
        cursor: pointer;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        &:hover {
          color: @themeColor;
        }
      }
      .u-date {
        margin-top: 30px;
        text-align: right;
        height: 20px;
        font-size: 14px;
        font-weight: 400;
        color: #666666;
        line-height: 20px;
      }
    }
  }
  &:hover {
    .arrow-left {
      display: inline-block;
    }
    .arrow-right {
      display: inline-block;
    }
  }
  .arrow-left {
    display: none;
    width: 25px;
    height: 25px;
    position: absolute;
    left: 12px;
    transform: translateY(-50%);
    fill: rgba(255, 255, 255, .6);
    cursor: pointer;
    vertical-align: bottom;
    transition: all .3s;
    &:hover {
      fill: rgba(255, 255, 255);
    }
  }
  .arrow-right {
    display: none;
    width: 25px;
    height: 25px;
    position: absolute;
    right: 12px;
    transform: translateY(-50%);
    fill: rgba(255, 255, 255, .6);
    cursor: pointer;
    vertical-align: bottom;
    transition: all .3s;
    &:hover {
      fill: rgba(255, 255, 255);
    }
  }
  .m-switch {
    position: absolute;
    bottom: 16px;
    left: 20px;
    .u-rect {
      display: inline-block;
      cursor: pointer;
      margin-right: 7px;
      width: 30px;
      height: 4px;
      background: #E3E3E3;
      border-radius: 1px;
      transition: background-color 0.3s;
    }
    .active {
      background: @themeColor;
    }
  }
}
</style>
