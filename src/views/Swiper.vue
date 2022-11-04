<template>
  <div class="m-swiper">
    <Carousel :imageData="imageData" width="1200px" height="400px" v-if="false" />
    <BannerFade class="mt60" :imageData="imageData" width="100%" height="100vh" v-if="true" />
    <BannerSlide class="mt60" :imageData="imageData" width="540px" height="360px" v-if="false" />
  </div>
</template>
<script>
import Carousel from 'components/swiper/Carousel'
import BannerFade from 'components/swiper/BannerFade'
import BannerSlide from 'components/swiper/BannerSlide'
export default {
  name: 'Swiper',
  components: {
    Carousel,
    BannerFade,
    BannerSlide
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
        // {
        //   title: 'image-4',
        //   imgUrl: require('@/assets/images/4.jpg')
        // },
        // {
        //   title: 'image-5',
        //   imgUrl: require('@/assets/images/5.jpg')
        // }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
</style>
