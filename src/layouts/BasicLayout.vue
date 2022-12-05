<template>
  <div class="basicLayout">
    <a-menu v-model="current" mode="horizontal" theme="dark" @click="onClick">
      <a-menu-item key="Common">
        <router-link to="/common">常用</router-link>
      </a-menu-item>
      <a-menu-item key="Spin">
        <router-link to="/spin">加载中</router-link>
      </a-menu-item>
      <a-menu-item key="Table">
        <router-link to="/table">分页列表</router-link>
      </a-menu-item>
      <a-menu-item key="Modal">
        <router-link to="/modal">对话框</router-link>
      </a-menu-item>
      <a-menu-item key="Tip">
        <router-link to="/tip">提示框</router-link>
      </a-menu-item>
      <a-menu-item key="Lines">
        <router-link to="/lines">Lines</router-link>
      </a-menu-item>
      <a-menu-item key="Swiper">
        <router-link to="/swiper">触摸滑动插件</router-link>
      </a-menu-item>
      <a-menu-item key="Tree">
        <router-link to="/tree">树图</router-link>
      </a-menu-item>
      <a-menu-item key="Drag">
        <router-link to="/drag">拖拽组件</router-link>
      </a-menu-item>
      <a-menu-item key="Selector">
        <router-link to="/selector">下拉组件</router-link>
      </a-menu-item>
      <a-menu-item key="ImgSlider">
        <router-link to="/imgSlider">图片轮播组件</router-link>
      </a-menu-item>
      <a-menu-item key="Steps">
        <router-link to="/steps">步骤条组件</router-link>
      </a-menu-item>
      <a-menu-item key="Video">
        <router-link to="/video">播放组件</router-link>
      </a-menu-item>
      <a-menu-item key="Banner">
        <router-link to="/banner">banner组件</router-link>
      </a-menu-item>
      <a-menu-item key="Pdf">
        <router-link to="/pdf">pdf预览</router-link>
      </a-menu-item>
      <a-menu-item key="Slider">
        <router-link to="/slider">文字滚动</router-link>
      </a-menu-item>
      <a-sub-menu>
        <span slot="title" class="submenu-title-wrapper">Navigation Three - Submenu</span>
        <a-menu-item-group title="Item 1">
          <a-menu-item key="setting:1">
            Option 1
          </a-menu-item>
          <a-menu-item key="setting:2">
            Option 2
          </a-menu-item>
        </a-menu-item-group>
      </a-sub-menu>
    </a-menu>
    <router-view class="limit1200" :key="current[0]" />
  </div>
</template>
<script>
export default {
  name: 'BasicLayout',
  data () {
    return {
      current: [this.$route.name || 'Common']
    }
  },
  created () {
    console.log(this.$route.name)
  },
  methods: {
    onClick ({ item, key, keyPath }) {
      console.log('item:', item)
      console.log('key:', key)
      console.log('keyPath:', keyPath)
    }
  }
}
</script>
<style lang="less" scoped>
</style>
