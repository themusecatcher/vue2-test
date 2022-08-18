<template>
  <div id="app">
    <div class="m-tag">
      <div class="u-tag yellow mr20" @mouseenter="onShowTip($event, '特斯拉(Tesla)是美国一家电动汽车及能源公司，总部位于帕洛阿托(Palo Alto)，市值达2100亿美元，产销电动汽车、太阳能板、及储能设备')" @mouseleave="onHideTip">特斯拉</div>
      <div class="u-tag blue" @mouseenter="onShowTip($event, '《哥斯拉大战金刚》是由美国传奇影业公司出品，亚当·温佳德执导，亚历山大·斯卡斯加德、米莉·博比·布朗、丽贝卡·豪尔、凯莉·霍特尔、布莱恩·泰里·亨利、小栗旬联合主演的动作科幻片，于2021于3月26日在中国内地上映')" @mouseleave="onHideTip">哥斯拉</div>
    </div>
    <br/>
    <div class="u-tag yellow" @click="onShowMessage('This is a normal message')">哥斯拉</div>
    <div class="m-num" id="num" ref="num">
      <p class="u-num">{{ low }}</p>
      <p class="u-num">{{ high }}</p>
    </div>
    <div class="slider">
      <NumSlider
        :min="0"
        :max="100"
        :initialMin="20"
        :initialMax="80"
        :width="1200"
        :disabled="false"
        @lowChange="lowChange"
        @highChange="highChange"
      />
    </div>
    <Tooltip ref="tooltip" :maxWidth="240">
			<div class="u-content" v-if="content">{{ content }}</div>
		</Tooltip>
    <Message ref="message" :duration="3000" :top="30" />
  </div>
</template>
<script>
import NumSlider from '@/components/NumSlider'
import Tooltip from '@/components/Tooltip'
import Message from '@/components/Message'
export default {
  name: 'App',
  components: {
    NumSlider,
    Tooltip,
    Message
  },
  data () {
    return {
      content: '',
      low: 20,
      high: 80
    }
  },
  methods: {
    lowChange (val) {
      this.low = val
      console.log('lowChange:', val)
    },
    highChange (val) {
      this.high = val
      console.log('highChange:', val)
    },
    onShowTip (e, content) {
      this.content = content
      this.$refs.tooltip.show(e.target)
    },
    onHideTip () {
      this.$refs.tooltip.onHide()
    },
    onShowMessage (content) {
      this.$refs.message.info(content) // info调用
      // this.$refs.message.success(content) // success调用
      // this.$refs.message.error(content) // error调用
      // this.$refs.message.warning(content) // warning调用
    }
  }
}
</script>
<style lang="less" scoped>
#app {
  width: 1200px;
  min-width: 1200px;
  margin: 0 auto;
  margin-top: 150px;
  text-align: center;
}
.m-num {
  min-width: 1200px;
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  .u-num {
    color: #333;
    font-size: 24px;
  }
}
.slider {
  margin: 30px auto 120px;
}
.m-tag {
  width: 600px;
  margin: 0 auto;
  border: 1px solid #0079DD;
  // position: relative;
}
.u-tag {
  margin-top: 60px;
  display: inline-block;
  padding: 6px 12px;
  border-radius: 15px;
  height: 20px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  cursor: pointer;
}
.mr20 {
  margin-right: 20px;
}
.yellow {
  color: #FF9000;
  background: #FFF9F0;
}
.blue {
  color: #0079DD;
  background: #F0F7FD;
}
</style>
