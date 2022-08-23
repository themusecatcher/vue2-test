<template>
  <div class="m-spin">
    <div :class="['m-spin-dot', tip ? 'mt36':'mt18']">
      <span class="u-dot-item"></span>
      <span class="u-dot-item"></span>
      <span class="u-dot-item"></span>
      <span class="u-dot-item"></span>
    </div>
    <p class="u-tip">{{ tip }}</p>
  </div>
</template>
<script>
export default {
  name: 'Spin',
  props: {
    tip: { // 描述文案
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="less" scoped>
@themeColor: #1890ff;
.m-spin {
  position: relative;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, .5); // 加载过程背景虚化
}
.u-tip {
  position: absolute;
  top: 50%;
  font-size: 16px;
  line-height: 20px;
  color: @themeColor;
  width: 100%;
  text-align: center;
  padding-top: 16px;
  text-shadow: 0 1px 2px #FFF;
}
.m-spin-dot {
  position: absolute;
  display: inline-block;
  width: 36px;
  height: 36px;
  top: 50%;
  left: 0;
  right: 0;
  margin: 0 auto;
  transform: rotate(45deg);
  -ms-transform: rotate(45deg); /* Internet Explorer */
  -moz-transform: rotate(45deg); /* Firefox */
  -webkit-transform: rotate(45deg); /* Safari 和 Chrome */
  -o-transform: rotate(45deg); /* Opera */
  animation: rotate 1.2s linear infinite;
  -webkit-animation: rotate 1.2s linear infinite;
  @keyframes rotate {
    100% {transform: rotate(405deg);}
  }
  .u-dot-item { // 单个圆点样式
    position: absolute;
    width: 10px;
    height: 10px;
    background: @themeColor;
    border-radius: 50%;
    opacity: .3;
    animation: spinMove 1s linear infinite alternate;
    -webkit-animation: spinMove 1s linear infinite alternate;
    @keyframes spinMove {
      100% {opacity: 1;}
    }
  }
  .u-dot-item:first-child {
    top: 0;
    left: 0;
  }
  .u-dot-item:nth-child(2) {
    top: 0;
    right: 0;
    animation-delay: .4s;
    -webkit-animation-delay: .4s;
  }
  .u-dot-item:nth-child(3) {
    bottom: 0;
    right: 0;
    animation-delay: .8s;
    -webkit-animation-delay: .8s;
  }
  .u-dot-item:last-child {
    bottom: 0;
    left: 0;
    animation-delay: 1.2s;
    -webkit-animation-delay: 1.2s;
  }
}
.mt36 {
  margin-top: -36px;
}
.mt18 {
  margin-top: -18px;
}
</style>