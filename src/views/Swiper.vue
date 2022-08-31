<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        :style="`background: url(${image.imgUrl}) no-repeat center;background-size: cover;`"
        :title="image.title"
        v-for="(image, index) in imageData"
        :key="index">
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    <!-- 如果需要滚动条 -->
    <!-- <div class="swiper-scrollbar"></div> -->
  </div>
</template>
<script>
import 'swiper/css/swiper.css'
import Swiper from 'swiper'
export default {
  name: 'Swiper',
  data () {
    return {
      imageData: [
        {
          title: 'image-1,image-1,image-1,image-1,image-1,image-1,image-1,image-1,image-1',
          imgUrl: 'https://ali.jinhui365.cn/group5/M00/00/73/CgAAcmEDZMWADliHAAf8CDmwJyU179.jpg'
        },
        {
          title: 'image-2,image-2,image-2,image-2,image-2,image-2,image-2,image-2,image-2',
          imgUrl: 'https://ali.jinhui365.cn/group5/M00/00/73/CgAAcmEDZNWALsZBAAp6hWvLki4357.jpg'
        },
        {
          title: 'image-3,image-3,image-3,image-3,image-3,image-3,image-3,image-3,image-3',
          imgUrl: 'https://ali.jinhui365.cn/group5/M00/00/73/CgAAcmEDZOKAPknKAAUO5gkkV8M466.jpg'
        }
      ]
    }
  },
  mounted () {
    new Swiper('.swiper-container', {
      pagination: { // 如果需要分页器
        el: ".swiper-pagination"
      },
      navigation: { // 如果需要前进后退按钮
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      // scrollbar: { // 如果需要滚动条
      //   el: '.swiper-scrollbar',
      // },
      loop: true // 循环模式选项
    })
  }
}
</script>
<style lang="less" scoped>
.swiper-container {
  width: 600px;
  height: 400px;
  margin: 0 auto;
  .swiper-slide {
  }
}
</style>