<template>
  <div class="m-slider" :style="`height: ${height}px;`">
    <transition-group name="slide">
      <a
        v-for="(item, index) in sliderData"
        class="u-slider"
        :key="index"
        v-show="index===activeIndex"
        :title="item.title"
        :href="item.link"
        @mouseenter="onStop"
        @mouseleave="onStart">
      {{ item.title }}</a>
    </transition-group>
  </div>
</template>
<script>
export default {
  name: 'VerticalTextSlider',
  props: {
    sliderData: { // 滚动文字数组
      type: Array,
      required: true,
      default: () => {
        return []
      }
    },
    interval: { // 文字滚动时间间隔
      type: Number,
      default: 3000
    },
    height: { // 展示文字高度
      type: Number,
      default: 60
    }
  },
  data () {
    return {
      activeIndex: 0
    }
  },
  computed: {
    len () {
      return this.sliderData.length
    }
  },
  mounted () {
    this.onStart() // 启动公告轮播
  },
  methods: {
    onStop () {
      if (this.len > 1) {
        clearTimeout(this.timer)
      }
    },
    onStart () {
      if (this.len > 1) {
        this.startMove(this.len)
      }
    },
    startMove () {
      this.timer = setTimeout(() => {
        if (this.activeIndex === this.len - 1) {
          this.activeIndex = 0
        } else {
          this.activeIndex++
        }
        this.startMove()
      }, this.interval)
    }
  }
}
</script>
<style lang="less" scoped>
@themeColor: #1890FF;
.slide-enter-active, .slide-leave-active {
  transition: all 1.2s ease-in;
}
.slide-enter {
  transform: translateY(40px) scale(0.5);
  opacity: 0;
}
.slide-leave-to {
  transform: translateY(-40px) scale(0.5);
  opacity: 0;
}
.m-slider {
  position: relative;
  width: 100%;
  min-width: 1200px;
  background: #F6FFED;
  overflow: hidden;
  .u-slider {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    display: inline-block;
    text-align: center;
    height: 24px;
    line-height: 24px;
    font-size: 18px;
    color: #333;
    max-width: 1200px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: pointer;
    &:hover {
      color: #1890FF;
    }
  }
}
</style>
