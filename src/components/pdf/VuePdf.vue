<template>
  <div class="m-vue-pdf">
    <div v-show="loaded">
      <Pdf v-for="index in numPages" :key="index" :src="pdfUrl" :page="index" />
    </div>
  </div>
</template>
<script>
import Pdf from 'vue-pdf'
export default {
  name: 'VuePdf',
  components: {
    Pdf
  },
  data () {
    return {
      loaded: false,
      numPages: null,
      // 可引入网络文件或者本地文件
      pdfUrl: '/Markdown.pdf' // 如果引入本地pdf文件，需要将pdf放在public文件夹下，引用时使用绝对路径（/：表示public文件夹）
    }
  },
  created () {
    this.loadPdf()
  },
  methods: {
    // 上下滚动pdf加载
    loadPdf () {
      this.pdfUrl = Pdf.createLoadingTask(this.pdfUrl)
      this.pdfUrl.promise.then(pdf => {
        this.$nextTick(() => {
          this.numPages = pdf.numPages // pdf总页数
          this.loaded = true
        })
      })
    }
  }
}
</script>
<style lang="less" scoped>
.m-vue-pdf {
  overflow: hidden;
}
</style>
