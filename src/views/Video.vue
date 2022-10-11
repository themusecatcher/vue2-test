<template>
  <div>
    <VideoPlay
      :hidden="false"
      videoUrl="https://download.jinhui365.cn/group1/M00/00/A7/CgAAcmNCagWAejQND0jqHviL8QA869.mp4"
      videoCover="https://download.jinhui365.cn//group1/M00/00/A8/CgAAcmNCddKACHUbAADB2zx3w90256.jpg"
      :width="800"
      :height="450"
      :autoplay="false"
      :controls="true"
      :loop="false"
      :muted="false"
      preload="auto"
      :playWidth="96"
    />
  </div>
</template>
<script>
import VideoPlay from '@/components/VideoPlay'
export default {
  name: 'Video',
  components: {
    VideoPlay
  }
}
</script>
<style lang="less" scoped>
</style>