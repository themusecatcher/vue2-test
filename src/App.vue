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
      includes: []
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
  }
}
</script>
<style lang="less" scoped>
#app {
  min-height: 100vh;
  min-width: 1200px;
  margin: 0 auto;
}
</style>
