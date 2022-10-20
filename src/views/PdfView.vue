<template>
  <div class="pdf">
    <Pdfh5 v-show="false" />
    <!-- 一次性加载全部pdf，上下滚动查看pdf（对于较大的pdf文件初次加载较慢，交互体验较差） -->
    <VuePdf v-show="false" />
    <!-- 分页加载预览pdf，左上角自定义显示当前页码和总页数，通过监听手指上下(或左右)滑动进行翻页 -->
    <VuePdfPaging v-show="false" />
    <!-- 采用分页预览pdf，包括自定义跳转到指定页数，上一页，下一页按钮（初次加载更快，交互体验更好） -->
    <VuePdfJump v-show="true" />
  </div>
</template>
<script>
import Pdfh5 from 'components/Pdfh5'
import VuePdf from 'components/VuePdf'
import VuePdfPaging from 'components/VuePdfPaging'
import VuePdfJump from 'components/VuePdfJump'
export default {
  name: 'PdfView',
  components: {
    Pdfh5,
    VuePdf,
    VuePdfPaging,
    VuePdfJump
  }
}
</script>
<style lang="less" scoped>
</style>
