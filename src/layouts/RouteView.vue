<template>
  <div class="router-view">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'RouteView',
}
</script>
<style scoped>
.router-view {
  min-height: 100vh;
  min-width: 1200px;
  margin: 0 auto;
}
</style>
