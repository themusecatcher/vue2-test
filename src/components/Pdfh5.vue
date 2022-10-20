<template>
  <div class="m-pdfh5">
    <div id="pdf"></div>
  </div>
</template>
<script>
import Pdfh5 from 'pdfh5'
import 'pdfh5/css/pdfh5.css'
export default {
  name: 'Pdfh5',
  data () {
    return {
      pdfh5: null,
      // 可引入网络文件或者本地文件
      pdfUrl: '/Markdown.pdf' // 如果引入本地pdf文件，需要将pdf放在public文件夹下，引用时使用绝对路径（/：表示public文件夹）
    }
  },
  mounted () {
    // pdfh5实例化时传两个参数：selector选择器，options配置项参数，会返回一个pdfh5实例对象，可以用来操作pdf，监听相关事件
    // pdfh5 = new Pdfh5(selector, options) goto初始到第几页，logo设置每一页pdf上的水印
    this.pdfh5 = new Pdfh5('#pdf', { pdfurl: this.pdfUrl, goto: 1, logo: { src: require('images/logo.png'), x: 420, y: 700, width: 120, height: 120 } })
    // 监听pdf准备开始渲染，此时可以拿到pdf总页数
    this.pdfh5.on('ready', function () {
      console.log('总页数:' + this.totalNum)
    })
    // 监听pdf加载完成事件，加载失败、渲染成功都会触发
    this.pdfh5.on('complete', (status, msg, time) => {
      console.log('状态:' + status + '，信息:' + msg + '，耗时:' + time + '毫秒')
    })
  }
}
</script>
<style lang="less" scoped>
.m-pdfh5 { // 保证pdf区域铺满整个屏幕
  // 方法1：使用vw和vh视窗单位，1vw=视窗宽度的1%；1vh=视窗高度的1%
  // width: 100vw;
  // height: 100vh;
  // 方法2：使用fixed定位
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}
</style>
