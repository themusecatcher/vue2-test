<template>
  <div class="m-carousel mt60">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          :title="image.title"
          v-for="(image, index) in imageData"
          :key="index">
          <div class="swiper-lazy" :data-background="image.imgUrl">
            <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </div>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
import 'swiper/css/swiper.css'
import Swiper from 'swiper'
export default {
  name: 'Carousel',
  data () {
    return {
      swiper: null,
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
    this.swiper = new Swiper('.swiper-container', {
      lazy: {
        loadPrevNext: true, // 默认false情况下swiper只加载当前slide的图片，其他图片不加载，设置为true后，swiper会提前加载下一个slide的图片
        loadPrevNextAmount: 2 // 默认为1，设置在延迟加载图片时，提前多少个slide
      },
      pagination: { // 如果需要分页器
        el: '.swiper-pagination',
        // dynamicBullets: true, // 动态分页器，分页器小点的数量部分隐藏
        // dynamicMainBullets: 2, // 动态分页器的主指示点数量
        clickable: true, // 点击分页器的指示点控制swiper切换
        type: 'bullets', // 分页器样式类型，默认bullets圆点 fraction分式，progressbar进度条，custom自定义
        renderBullet: function (index, className) {
          console.log('index:', index)
          console.log('className:', className)
          return '<span class="' + className + '">' + (index + 1) + '</span>'
        }
      },
      mousewheel: true, // 是否开启鼠标滚轮控制swiper切换 ，默认false
      direction: 'horizontal', // 滑动方向
      speed: 3000, // 切换速度，自动滑动开始到结束的时间
      grabCursor: true, // 悬浮时鼠标样式切换
      slidesPerView: 3, // slider容器能够同时显示的slides数量，默认为1，auto自动根据slide宽度来设定数量
      slidesPerGroup: 1, // 定义多少slide为一组，默认为1
      spaceBetween: 20, // slide之间的距离
      centerInsufficientSlides: true, // 当slide总数小于slidesPerView时，slide居中
      effect: 'slide', // slide的切换效果，默认为'slide'位移切换，'fade'淡入，'cube'方块，'coverflow'3d流，'flip'3d翻转，'cards'卡片式，'creative'创意性
      // autoplay: true, // 启动自动切换，等同于以下设置
      autoplay: {
        delay: 0, // 多少秒切换一次，默认3000ms
        disableOnInteraction: false, // 用户操作之后，是否禁止autoplay，默认true，操作包括触碰，拖动，点击pagination
        waitForTransition: true // 是否等待过渡完成，再开始自动切换的计时，默认true
      },
      loop: true // 循环模式选项
    })
    // 6.6.2之前的版本需要通过代码实现此功能；开启后，鼠标置于swiper时暂停自动切换，离开时回复自动切换
    this.swiper.el.onmouseover = function () { // 鼠标覆盖停止自动切换
      this.swiper.autoplay.stop()
    }
    this.swiper.el.onmouseout = function () { // 鼠标离开开始自动切换
      this.swiper.autoplay.start()
    }
  }
}
</script>
<style lang="less" scoped>
.swiper-container {
  --swiper-theme-color: #1890FF;/* 设置Swiper风格 */
  --swiper-pagination-color: #00ff33;/* 单独设置分页导航颜色 */
  width: 1200px;
  height: 400px;
  margin: 0 auto;
  .swiper-wrapper { // 自动切换过渡效果设置
    transition-timing-function: linear; // 线性过渡模拟走马灯效果
    -webkit-transition-timing-function: linear;
    .swiper-slide { // 懒加载时背景图
      // background: url(~@/assets/images/default.png) no-repeat center;
      background-color: #000;
      background-size: cover;
    }
    .swiper-lazy {
      width: 100%;
      height: 100%;
      background-size: cover;
    }
  }
  .swiper-pagination { // 自定义分页器样式
    :deep(.swiper-pagination-bullet) {
      width: 20px;
      height: 20px;
      text-align: center;
      line-height: 20px;
      font-size: 12px;
      color: #000;
      opacity: 1;
      background: rgba(0,0,0,0.2);
    }
    :deep(.swiper-pagination-bullet-active) {
      color: #fff;
      background: #007aff;
    }
  }
}
</style>
