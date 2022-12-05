<template>
  <div class="slider">
    <ImageSlider v-show="false" :imageData="imageData" :imageWidth="460" :imageHeight="320" :interval="3000" />
    <Carousel v-show="false" style="margin-top: 60px;" :imageData="imageData" :imageWidth="540" :imageHeight="360" :interval="3000" />
    <Waterfall :imageData="imageData" :columnCount="3" :columnGap="30" :totalWidth="900" />
  </div>
</template>
<script>
import ImageSlider from '@/components/ImageSlider'
import Carousel from '@/components/Carousel'
import Waterfall from '@/components/Waterfall'
export default {
  name: 'ImgSlider',
  components: {
    ImageSlider,
    Carousel,
    Waterfall
  },
  data () {
    return {
      imageData: [
        {
          title: 'image-1',
          imgUrl: require('@/assets/images/1.jpg')
        },
        {
          title: 'image-2',
          imgUrl: require('@/assets/images/2.jpg')
        },
        {
          title: 'image-3',
          imgUrl: require('@/assets/images/3.jpg')
        },
        {
          title: 'image-4',
          imgUrl: require('@/assets/images/4.jpg')
        },
        {
          title: 'image-5',
          imgUrl: require('@/assets/images/5.jpg')
        },
        {
          title: 'image-6',
          imgUrl: require('@/assets/images/6.jpg')
        },
        {
          title: 'image-7',
          imgUrl: require('@/assets/images/7.jpg')
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.components {
  width: 1200px;
  margin: 0 auto;
}
</style>
