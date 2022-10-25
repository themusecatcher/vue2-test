<template>
  <div class="m-swiper">
    <SwiperBanner :imageData="imageData" height="" width="" />
  </div>
</template>
<script>
import SwiperBanner from 'components/SwiperBanner'
export default {
  name: 'Swiper',
  components: {
    SwiperBanner
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
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
@themeColor: #1890FF;
.m-swiper {
}
</style>
