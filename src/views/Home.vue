<template>
  <div class="home">
    <a-menu v-model="current" mode="horizontal" @click="onClick">
      <a-menu-item key="components">
        <router-link to="/components" target="_blank">常用组件</router-link>
      </a-menu-item>
      <a-menu-item key="swiper">
        <router-link to="/swiper" target="_blank">触摸滑动插件</router-link>
      </a-menu-item>
      <a-menu-item key="tree">
        <router-link to="/tree" target="_blank">树图</router-link>
      </a-menu-item>
      <a-menu-item key="drag">
        <router-link to="/drag" target="_blank">拖拽组件</router-link>
      </a-menu-item>
      <a-menu-item key="selector">
        <router-link to="/selector" target="_blank">下拉组件</router-link>
      </a-menu-item>
      <a-menu-item key="imgSlider">
        <router-link to="/imgSlider" target="_blank">图片轮播组件</router-link>
      </a-menu-item>
      <a-menu-item key="steps">
        <router-link to="/steps" target="_blank">步骤条组件</router-link>
      </a-menu-item>
      <a-menu-item key="video">
        <router-link to="/video" target="_blank">播放组件</router-link>
      </a-menu-item>
      <a-menu-item key="banner">
        <router-link to="/banner" target="_blank">banner组件</router-link>
      </a-menu-item>
      <a-menu-item key="pdf">
        <router-link to="/pdf" target="_blank">pdf预览</router-link>
      </a-menu-item>
      <a-menu-item key="slider">
        <router-link to="/slider" target="_blank">文字滚动</router-link>
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
