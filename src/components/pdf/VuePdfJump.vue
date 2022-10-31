<template>
  <div class="m-vue-pdf" v-show="loaded">
    <div class="m-page">
      <div class="m-left">
        <span class="u-label">跳至</span>
        <input v-model='jumpNum' type="number" class="u-input" />
        <span class="u-unit">页</span>
        <a class="u-button" @click="onJump">确定</a>
        <div class="assist"></div>
      </div>
      <div class="m-right">
        <svg viewBox="64 64 896 896" data-icon="left" :class="['u-arrow', { gray: currentPage===1 }]" @click="onPrePage" aria-hidden="true" focusable="false"><path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path></svg>
        <span class="u-num">{{currentPage}}/{{totalCount}}</span>
        <svg :class="['u-arrow', { gray: currentPage===totalCount }]" @click="onNextPage" viewBox="64 64 896 896" data-icon="right" aria-hidden="true" focusable="false"><path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"></path></svg>
        <div class="assist"></div>
      </div>
    </div>
    <Pdf
      :src="pdfUrl"
      :page="currentPage"
      @num-pages="totalCount=$event"
      @page-loaded="currentPage=$event"
      @loaded="loadPdfHandler">
    </Pdf>
  </div>
</template>
<script>
import Pdf from 'vue-pdf'
export default {
  naem: 'VuePdfJump',
  components: {
    Pdf
  },
  data () {
    return {
      loaded: false,
      numPages: '',
      currentPage: 1, // pdf文件页码
      totalCount: 0, // pdf文件总页数
      jumpNum: null,
      // 可引入网络文件或者本地文件
      pdfUrl: '/Markdown.pdf' // 如果引入本地pdf文件，需要将pdf放在public文件夹下，引用时使用绝对路径（/：表示public文件夹）
    }
  },
  created () {
    var docEl = window.document.documentElement
    var width = window.screen.availWidth || window.screen.width
    var rootSize = width / 15
    docEl.style.fontSize = rootSize + 'px'
  },
  methods: {
    onJump () {
      if (this.jumpNum) {
        if (Number(this.jumpNum) <= this.totalCount && Number(this.jumpNum) >= 1) {
          this.currentPage = Number(this.jumpNum)
          this.jumpNum = null
        } else {
          this.$toast('请输入正确的跳转页码', this.toastParams)
        }
      } else {
        this.$toast('请输入要跳转的页码', this.toastParams)
      }
    },
    onPrePage () {
      if (this.currentPage > 1) {
        this.currentPage--
      }
    },
    onNextPage () {
      if (this.currentPage < this.totalCount) {
        this.currentPage++
      }
    },
    // pdf加载时
    loadPdfHandler (e) {
      this.currentPage = 1 // 加载的时候先加载第一页
      this.loaded = true
    }
  }
}
</script>
<style lang="less" scoped>
.m-vue-pdf {
  overflow: hidden;
  .m-page {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    height: 1.5rem;
    display: flex;
    z-index: 9;
    justify-content: space-between;
    .m-left {
      margin-left: 0.8rem;
      font-size: 0.64rem;
      color: #333;
      .u-label {
        display: inline-block;
        vertical-align: middle;
      }
      .u-input {
        width: 1rem;
        height: 0.64rem;
        border: 0.04rem solid #999;
        border-radius: 0.1rem;
        margin: 0 0.16rem;
        text-align: center;
        background: #FFF;
        outline: none;
        vertical-align: middle;
      }
      .u-unit {
        margin-right: 0.24rem;
        vertical-align: middle;
      }
      .u-button {
        color: #333;
        display: inline-block;
        padding: 0.01rem 0.2rem;
        border-radius: 0.08rem;
        border: 0.04rem solid #999;
        font-size: 0.54rem;
        background: transparent;
        outline: none;
        vertical-align: middle;
        -webkit-tap-highlight-color: transparent;
      }
      .assist {
        height: 100%;
        width: 0;
        display: inline-block;
        vertical-align: middle;
      }
    }
    .m-right {
      margin-right: 0.8rem;
      font-size: 0.64rem;
      color: #333;
      .u-arrow {
        width: 0.64rem;
        height: 0.64rem;
        fill: #333;
        vertical-align: middle;
        cursor: pointer;
      }
      .gray {
        fill: #999;
        cursor: default;
      }
      .u-num {
        letter-spacing: 0.1rem;
        display: inline-block;
        margin: 0 0.2rem;
        vertical-align: middle;
      }
      .assist {
        height: 100%;
        width: 0;
        display: inline-block;
        vertical-align: middle;
      }
    }
  }
}
</style>
