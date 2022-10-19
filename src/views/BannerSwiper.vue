<template>
  <div class="banner">
    <Banner :bannerData="bannerData" />
  </div>
</template>
<script>
import Banner from '@/components/Banner'
import { getAction } from '@/api/index'
export default {
  name: 'BannerSwiper',
  components: {
    Banner
  },
  data () {
    return {
      bannerData: {},
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
          this.bannerData = res.data[0]
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
