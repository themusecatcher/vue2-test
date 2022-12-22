<template>
  <div class="slider">
    <ImageSlider v-if="false" :imageData="imageData" :imageWidth="460" :imageHeight="320" :interval="3000" />
    <Carousel v-if="false" style="margin-top: 60px;" :imageData="imageData" :imageWidth="540" :imageHeight="360" :interval="3000" />
    <CSSWaterfall
      v-show="false"
      class="mt60"
      :imageData="imageData"
      :columnCount="3"
      :columnGap="30"
      :totalWidth="900"
      backgroundColor="#F2F4F8" />
    <JSWaterfall
      class="mt60"
      :imageData="imageData"
      :columnCount="3"
      :columnGap="10"
      :totalWidth="900"
      backgroundColor="#F2F4F8" />
  </div>
</template>
<script>
import ImageSlider from '@/components/ImageSlider'
import Carousel from '@/components/Carousel'
import CSSWaterfall from 'components/waterfall/CSSWaterfall'
import JSWaterfall from 'components/waterfall/JSWaterfall'
export default {
  name: 'ImgSlider',
  components: {
    ImageSlider,
    Carousel,
    CSSWaterfall,
    JSWaterfall
  },
  data () {
    return {
      imageData: [
        // {
        //   title: 'image-1',
        //   imgUrl: require('@/assets/images/1.jpg')
        // },
        // {
        //   title: 'image-2',
        //   imgUrl: require('@/assets/images/2.jpg')
        // },
        // {
        //   title: 'image-3',
        //   imgUrl: require('@/assets/images/3.jpg')
        // },
        // {
        //   title: 'image-4',
        //   imgUrl: require('@/assets/images/4.jpg')
        // },
        // {
        //   title: 'image-5',
        //   imgUrl: require('@/assets/images/5.jpg')
        // },
        // {
        //   title: 'image-6',
        //   imgUrl: require('@/assets/images/6.jpg')
        // },
        // {
        //   title: 'image-7',
        //   imgUrl: require('@/assets/images/7.jpg')
        // },
        // {
        //   title: 'image-8',
        //   imgUrl: require('@/assets/images/8.jpg')
        // },
        // {
        //   title: 'image-9',
        //   imgUrl: require('@/assets/images/9.jpg')
        // },
        // {
        //   title: 'image-10',
        //   imgUrl: require('@/assets/images/10.jpg')
        // }
      ]
    }
  },
  mounted () {
    setTimeout(() => {
      this.imageData = [
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
        },
        {
          title: 'image-8',
          imgUrl: require('@/assets/images/8.jpg')
        }
      ]
    }, 3000)
  }
}
</script>
<style lang="less" scoped>
.components {
  width: 1200px;
  margin: 0 auto;
}
</style>
