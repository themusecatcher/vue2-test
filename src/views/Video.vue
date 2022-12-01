<template>
  <div>
    <VideoPlay
      v-show="true"
      videoUrl="https://download.jinhui365.cn/group1/M00/00/A7/CgAAcmNCagWAejQND0jqHviL8QA869.mp4"
      videoCover="https://download.jinhui365.cn//group1/M00/00/A8/CgAAcmNCddKACHUbAADB2zx3w90256.jpg"
      :width="800"
      :height="450"
      :autoplay="true"
      :controls="true"
      :loop="false"
      :muted="false"
      preload="auto"
      :playWidth="96"
      zoom="cotain"
    />
    <SerializeVideo :imagesData="imagesData" width="100%" height="100vh" />
  </div>
</template>
<script>
import VideoPlay from 'components/VideoPlay'
import SerializeVideo from 'components/SerializeVideo'
export default {
  name: 'Video',
  components: {
    VideoPlay,
    SerializeVideo
  },
  data () {
    return {
      videoUrl: '',
      videoCover: '',
      imagesData: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg']
    }
  },
  mounted () {
    setTimeout(() => { // 模拟接口调用
      this.videoUrl = 'https://download.jinhui365.cn/group1/M00/00/A7/CgAAcmNCagWAejQND0jqHviL8QA869.mp4'
      this.videoCover = 'https://download.jinhui365.cn//group1/M00/00/A8/CgAAcmNCddKACHUbAADB2zx3w90256.jpg'
    }, 1000)
  }
}
</script>
<style lang="less" scoped>
</style>
