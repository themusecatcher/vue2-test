<template>
  <div id="app">
    <div class="m-tag yellow" @click="onShowMessage('This is a normal message')">哥斯拉</div>
    <Message ref="message" :duration="3000" :top="30" />
  </div>
</template>
<script>
import Message from '@/components/Message'
export default {
  name: 'App',
  components: {
    Message
  },
  methods: {
    onShowMessage (content) {
      this.$refs.message.info(content) // info调用
      // this.$refs.message.success(content) // success调用
      // this.$refs.message.error(content) // error调用
      // this.$refs.message.warning(content) // warning调用
    }
  }
}
</script>
<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.m-tag {
  margin-top: 120px;
  display: inline-block;
  padding: 6px 12px;
  border-radius: 15px;
  height: 20px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  cursor: pointer;
}
.yellow {
  color: #FF9000;
  background: #FFF9F0;
}
</style>
