<template>
  <div id="app">
    <keep-alive :include="includes">
      <!-- 需要缓存的组件 -->
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <!-- 不需要缓存的组件 -->
    <router-view v-if="!$route.meta.keepAlive"/>
  </div>
</template>
<script>
export default {
  name: 'App',
  data () {
    return {
      includes: [],
      mournDate: {}
    }
  },
  watch: {
    $route (to, from) {
      if (to.meta.keepAlive) {
        this.includes.push(to.name)
      }
      // 离开页面是keepAlive，并且离开页面的depth大于要进入页面的depth（即后退的）
      // 从列表进入首页，此时禁用缓存
      if (from.meta.keepAlive && (to.meta.depth || 0) < from.meta.depth) {
        const target = this.includes.indexOf(from.name)
        this.includes.splice(target, 1)
      }
    }
  },
  created () {
    this.getMournDate()
  },
  methods: {
    getMournDate () {
      // 调用接口获取后台设置的追悼日期范围（起始日~截止日）
      this.mournDate = {
        start: 1669824000000, // 2022-12-01
        end: 1670601600000 // 2022-12-10
      }
      this.checkMourn(this.mournDate)
    },
    checkMourn (mournDate) {
      var now = new Date().getTime()
      if (mournDate.start <= now && now <= mournDate.end) {
        // 追悼日只有设置在html元素上才不会影响fixed和absolute定位
        document.documentElement.style.filter = 'grayscale(100%)'
        setTimeout(() => { // 自动取消黑白
          document.documentElement.style.filter = 'none'
        }, mournDate.end - now)
      } else {
        document.documentElement.style.filter = 'none'
        if (now < mournDate.start) { // 自动变为黑白
          setTimeout(() => {
            document.documentElement.style.filter = 'grayscale(100%)'
          }, mournDate.start - now)
        }
      }
    }
  }
}
</script>
<style lang="less" scoped>
#app {
  // width: 100%;
  min-height: 100vh;
  // min-width: 1200px;
  margin: 0 auto;
}
</style>
