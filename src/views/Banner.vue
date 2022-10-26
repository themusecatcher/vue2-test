<template>
  <div class="banner">
    <BannerVideo v-show="false" :bannerData="bannerVideoData" />
    <BannerImg :bannerData="bannerImgData" />
  </div>
</template>
<script>
import BannerVideo from '@/components/BannerVideo'
import BannerImg from '@/components/BannerImg'
import { getAction } from 'apis/index'
export default {
  name: 'BannerSwiper',
  components: {
    BannerVideo,
    BannerImg
  },
  data () {
    return {
      bannerVideoData: {},
      bannerImgData: [
        {
          title: 'image-1',
          link: 'javascript:;',
          imgUrl: require('@/assets/images/1.jpg')
        },
        {
          title: 'image-2',
          link: 'javascript:;',
          imgUrl: require('@/assets/images/2.jpg')
        },
        {
          title: 'image-3',
          link: 'javascript:;',
          imgUrl: require('@/assets/images/3.jpg')
        }
      ],
      url: {
        banner: '/api/banner/list'
      }
    }
  },
  methods: {
    getBanner () {
      getAction(this.url.banner).then(res => {
        console.log('banner:', res)
        if (res.message.code === 0) {
          this.bannerVideoData = res.data[0]
          this.bannerImgData = res.data
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.banner {
  position: relative;
  height: 100vh;
}
</style>
