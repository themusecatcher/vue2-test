<template>
  <div class="m-progress" :style="`width:${width}px;`">
    <div class="m-progress-outer">
      <div class="m-progress-inner">
        <div class="u-progress-bg" :style="`width: ${progress}%;`"></div>
      </div>
    </div>
    <p class="u-progress-text">{{ progress }}%</p>
  </div>
</template>
<script>
export default {
  name: 'Progress',
  props: {
    width: { // 进度条总宽度
      type: Number,
      default: 600
    },
    progress: { // 当前进度
      type: Number,
      default: 36
    }
  }
}
</script>
<style lang="less" scoped>
.m-progress {
  height: 24px;
  margin: 0 auto;
  .m-progress-outer {
    display: inline-block;
    width: calc(100% - 56px);
    .m-progress-inner {
      width: 100%;
      background-color: #f5f5f5;
      border-radius: 100px;
      .u-progress-bg {
        background-color: #1890ff;
        border-radius: 100px;
        height: 8px;
        transition: all .3s cubic-bezier(.08,.82,.17,1);
      }
    }
  }
  .u-progress-text {
    display: inline-block;
    font-size: 16px;
    line-height: 24px;
    margin-left: 8px;
    width: 48px;
    color: rgba(0,0,0,.45);
    text-align: right;
    vertical-align: middle;
  }
}
</style>