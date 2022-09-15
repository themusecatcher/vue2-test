<template>
  <transition name="fade">
    <div
      ref="tooltip"
      class="m-tooltip"
      v-show="showTooltip"
      @mouseenter="onShow"
      @mouseleave="onHide"
      :style="`max-width: ${maxWidth}px; top: ${top}px; left: ${left}px;`">
      <div class="u-tooltip-content">
        <slot>暂无内容</slot>
      </div>
      <div class="u-tooltip-arrow"></div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'Tooltip',
  props: {
    maxWidth: { // 提示框内容最大宽度
      type: Number,
      default: 120
    }
  },
  data () {
    return {
      showTooltip: false,
      hideTimer: null,
      top: 0, // 提示框top定位
      left: 0 // 提示框left定位
    }
  },
  methods: {
    show (target) {
      clearTimeout(this.hideTimer)
      const rect = target.getBoundingClientRect()
      const targetTop = rect.top + window.pageYOffset
      const targetLeft = rect.left + window.pageXOffset
      const targetWidth = rect.width
      this.showTooltip = true
      this.$nextTick(() => {
        const tipWidth = this.$refs.tooltip.offsetWidth // 提示框元素宽度
        const tipHeight = this.$refs.tooltip.offsetHeight // 提示框元素高度
        this.top = targetTop - tipHeight
        this.left = targetLeft - (tipWidth - targetWidth) / 2
      })
    },
    onShow () {
      clearTimeout(this.hideTimer)
      this.showTooltip = true
    },
    onHide () {
      this.hideTimer = setTimeout(() => {
        this.showTooltip = false
      }, 100)
    },
  }
}
</script>
<style lang="less" scoped>
// 渐变过渡效果
.fade-enter-active, .fade-leave-active {
  transition: all .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: scale(0.8); // 缩放变换
  -ms-transform: scale(0.8); /* IE 9 */
	-webkit-transform: scale(0.8); /* Safari and Chrome */
}
// 滑动渐变过渡效果
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s ease;
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateY(6px); // 滑动变换
  -ms-transform: translateY(6px); /* IE 9 */
	-webkit-transform: translateY(6px); /* Safari and Chrome */
  opacity: 0;
}
.m-tooltip {
  position: absolute;
  z-index: 999;
  padding-bottom: 6px;
  .u-tooltip-content {
    padding: 10px;
    margin: 0 auto;
    word-break: break-all;
    word-wrap: break-word;
    background: #FFFFFF;
    box-shadow: 0px 2px 8px 0px rgba(0,121,221,0.3000);
    border-radius: 6px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #666666;
  }
  .u-tooltip-arrow {
    margin: 0 auto;
    width: 0;
    height: 0;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    border-top: 4px solid #FFF;
  }
}
</style>