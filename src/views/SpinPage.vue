<template>
  <div>
    <div class="m-area">
      <Loading :tip="tip" :infinite="false" :interval="200" v-show="loading" />
    </div>
    <div style="width: 500px; height: 200px;">
      <Spin :tip="tip" :spinning="spinning">
        <p class="spin-content">当 spinning 为 false 时，不显示 loading 状态；当 spinning 为 true 时，延迟`delay`ms时间后，显示 loading 效果；如果 spinning 状态在 `delay` 时间内结束，则不显示 loading 状态；如果不设置 tip 描述文案时，则只有 loading 效果水平垂直居中；如果设置了 tip 描述文案，则 loading 效果和 tip 描述文案一起水平垂直居中。</p>
      </Spin>
    </div>
  </div>
</template>
<script>
import Spin from 'components/Spin'
import Loading from 'components/Loading'
export default {
  name: 'SpinPage',
  components: {
    Spin,
    Loading
  },
  data () {
    return {
      tip: '加载中...',
      spinning: true,
      loading: true
    }
  },
  methods: {
  }
}
</script>
<style lang="less" scoped>
.m-area {
  margin: 0 auto;
  width: 500px;
  height: 400px;
  border: 1px solid #1890ff;
  background: #000;
}
.spin-content {
  border: 1px solid #91d5ff;
  background-color: #e6f7ff;
  padding: 30px;
}
</style>
