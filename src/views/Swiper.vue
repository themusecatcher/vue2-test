<template>
  <div class="m-swiper">
    <div class="swiper-container gallery-top">
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
      <div class="swiper-button-prev"></div><!--左箭头。如果放置在swiper外面，需要自定义样式。-->
      <div class="swiper-button-next"></div><!--右箭头。如果放置在swiper外面，需要自定义样式。-->
      <!-- 如果需要滚动条 -->
      <!-- <div class="swiper-scrollbar"></div> -->
    </div>
  </div>
</template>
<script>
import 'swiper/css/swiper.css'
import Swiper from 'swiper'
export default {
  name: 'Swiper',
  data () {
    return {
      thumbsSwiper: null,
      imageData: [
        {
          title: 'image-1,image-1,image-1,image-1,image-1,image-1,image-1,image-1,image-1',
          imgUrl: require('@/assets/images/1.jpg')
        },
        {
          title: 'image-2,image-2,image-2,image-2,image-2,image-2,image-2,image-2,image-2',
          imgUrl: require('@/assets/images/2.jpg')
        },
        {
          title: 'image-3,image-3,image-3,image-3,image-3,image-3,image-3,image-3,image-3',
          imgUrl: require('@/assets/images/3.jpg')
        },
        {
          title: 'image-2,image-2,image-2,image-2,image-2,image-2,image-2,image-2,image-2',
          imgUrl: require('@/assets/images/4.jpg')
        },
        {
          title: 'image-3,image-3,image-3,image-3,image-3,image-3,image-3,image-3,image-3',
          imgUrl: require('@/assets/images/5.jpg')
        }
      ]
    }
  },
  mounted () {
    new Swiper('.swiper-container', {
      pagination: { // 如果需要分页器
        el: ".swiper-pagination",
        dynamicBullets: true, // 动态分页器，分页器小点的数量部分隐藏
        clickable: true // 点击分页器的指示点控制swiper切换
      },
      navigation: { // 如果需要前进后退按钮
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      // scrollbar: { // 如果需要滚动条
      //   el: '.swiper-scrollbar',
      // },
      autoplay: true,
      loop: true // 循环模式选项
    })
  }
}
</script>
<style lang="less" scoped>
.swiper-container {
  --swiper-theme-color: #1890FF;/* 设置Swiper风格 */
  --swiper-navigation-color: #1890FF;/* 单独设置按钮颜色 */
  --swiper-navigation-size: 48px;/* 设置按钮高度 */
  width: 600px;
  height: 400px;
  margin: 0 auto;
  .swiper-prev { // 自定义导航样式
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 99;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background:aquamarine;
  }
}
.gallery-thumbs {
  height: 80px;
  .swiper-wrapper {
    text-align: center;
    justify-content: center;
  }
}
</style>