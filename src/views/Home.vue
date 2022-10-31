<template>
  <div class="home">
    <a-menu v-model="current" mode="horizontal" @click="onClick">
      <a-menu-item key="components">
        <router-link to="/components">常用组件</router-link>
      </a-menu-item>
      <a-menu-item key="spin">
        <router-link to="/spin">加载中</router-link>
      </a-menu-item>
      <a-menu-item key="table">
        <router-link to="/table">分页列表</router-link>
      </a-menu-item>
      <a-menu-item key="swiper">
        <router-link to="/swiper">触摸滑动插件</router-link>
      </a-menu-item>
      <a-menu-item key="tree">
        <router-link to="/tree">树图</router-link>
      </a-menu-item>
      <a-menu-item key="drag">
        <router-link to="/drag">拖拽组件</router-link>
      </a-menu-item>
      <a-menu-item key="selector">
        <router-link to="/selector">下拉组件</router-link>
      </a-menu-item>
      <a-menu-item key="imgSlider">
        <router-link to="/imgSlider">图片轮播组件</router-link>
      </a-menu-item>
      <a-menu-item key="steps">
        <router-link to="/steps">步骤条组件</router-link>
      </a-menu-item>
      <a-menu-item key="video">
        <router-link to="/video">播放组件</router-link>
      </a-menu-item>
      <a-menu-item key="banner">
        <router-link to="/banner">banner组件</router-link>
      </a-menu-item>
      <a-menu-item key="pdf">
        <router-link to="/pdf">pdf预览</router-link>
      </a-menu-item>
      <a-menu-item key="slider">
        <router-link to="/slider">文字滚动</router-link>
      </a-menu-item>
      <!-- <a-sub-menu>
        <span slot="title" class="submenu-title-wrapper">Navigation Three - Submenu</span>
        <a-menu-item-group title="Item 1">
          <a-menu-item key="setting:1">
            Option 1
          </a-menu-item>
          <a-menu-item key="setting:2">
            Option 2
          </a-menu-item>
        </a-menu-item-group>
      </a-sub-menu> -->
    </a-menu>
    <router-view />
  </div>
</template>
<script>
export default {
  data () {
    return {
      current: ['components']
    }
  },
  methods: {
    onClick ({ item, key, keyPath }) {
      console.log('key:', key)
      console.log('keyPath:', keyPath)
    }
  }
}
</script>
<style lang="less" scoped>
.home {
  margin: 0 auto;
  width: 1200px;
}
</style>
