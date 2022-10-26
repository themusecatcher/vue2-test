<template>
  <div class="slider">
    <ImageSlider v-show="false" :imageData="imageData" :imageWidth="460" :imageHeight="320" :interval="3000" />
    <Carousel style="margin-top: 60px;" :imageData="imageData" :imageWidth="540" :imageHeight="360" :interval="3000" />
  </div>
</template>
<script>
import ImageSlider from '@/components/ImageSlider'
import Carousel from '@/components/Carousel'
export default {
  name: 'ImgSlider',
  components: {
    ImageSlider,
    Carousel
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
