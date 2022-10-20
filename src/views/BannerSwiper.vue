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
      bannerImgData: [],
      url: {
        banner: '/api/banner/list'
      }
    }
  },
  created () {
    this.getBanner()
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
