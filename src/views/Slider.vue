<template>
  <div>
    <HorizontalTextSlider v-if="false" :sliderData="sliderData" @click="onClick" :totalWidth="1200" :amount="4" :height="50" />
    <VerticalTextSlider :sliderData="sliderData" :interval="3000" width="800px" :height="60" />
  </div>
</template>
<script>
import HorizontalTextSlider from 'components/HorizontalTextSlider'
import VerticalTextSlider from 'components/VerticalTextSlider'
export default {
  name: 'Slider',
  components: {
    HorizontalTextSlider,
    VerticalTextSlider
  },
  data () {
    return {
      sliderData: [
        {
          title: '美国作家杰罗姆·大卫·塞林格创作的唯一一部长篇小说',
          link: 'javascript:;'
        },
        {
          title: '首次出版于1951年',
          link: 'javascript:;'
        },
        {
          title: '塞林格将故事的起止局限于16岁的中学生霍尔顿·考尔菲德从离开学校到纽约游荡的三天时间内,塞林格将故事的起止局限于16岁的中学生霍尔顿·考尔菲德从离开学校到纽约游荡的三天时间内',
          link: 'javascript:;'
        },
        {
          title: '并借鉴了意识流天马行空的写作方法，充分探索了一个十几岁少年的内心世界',
          link: 'javascript:;'
        },
        {
          title: '愤怒与焦虑是此书的两大主题，主人公的经历和思想在青少年中引起强烈共鸣',
          link: 'javascript:;'
        }
      ]
    }
  },
  methods: {
    onClick (title) { // 获取点击的标题
      console.log('title:', title)
    }
  }
}
</script>
<style lang="less" scoped>
</style>
