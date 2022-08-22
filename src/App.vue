<template>
  <div id="app">
    <div v-show="false">
      <div class="u-tag yellow mr20" @mouseenter="onShowTip($event, '特斯拉(Tesla)是美国一家电动汽车及能源公司，总部位于帕洛阿托(Palo Alto)，市值达2100亿美元，产销电动汽车、太阳能板、及储能设备')" @mouseleave="onHideTip">特斯拉</div>
      <div class="u-tag blue" @mouseenter="onShowTip($event, '《哥斯拉大战金刚》是由美国传奇影业公司出品，亚当·温佳德执导，亚历山大·斯卡斯加德、米莉·博比·布朗、丽贝卡·豪尔、凯莉·霍特尔、布莱恩·泰里·亨利、小栗旬联合主演的动作科幻片，于2021于3月26日在中国内地上映')" @mouseleave="onHideTip">哥斯拉</div>
      <br/>
      <div class="u-tag yellow" @click="onShowMessage('This is a normal message')">哥斯拉</div>
    </div>
    <div class="m-area" v-show="false">
      <Loading :tip="tip" :infinite="false" :interval="200" v-show="loading" />
    </div>
    <div class="m-num" id="num" ref="num" v-show="false">
      <p class="u-num">{{ low }}</p>
      <p class="u-num">{{ high }}</p>
    </div>
    <Progress :width="600" :progress="36" v-show="false" />
    <VueAmazingSelector
      :selectData="selectData"
      :selectedValue="selectedValue"
      name="name"
      value="value"
      placeholder="请选择城市"
      :disabled="false"
      :width="160"
      :height="36"
      :num="6"
      v-show="false"
      @getValue="getValue" />
    <div class="slider" v-show="false">
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
    <Spin :tip="tip" v-show="loading" />
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
import Spin from '@/components/Spin'
// import Loading from '@/components/Loading'
import Progress from '@/components/Progress'
export default {
  name: 'App',
  components: {
    NumSlider,
    Tooltip,
    Message,
    Spin,
    Progress
    // Loading
  },
  data () {
    return {
      loading: false,
      tip: '加载中...',
      content: '',
      low: 20,
      high: 80,
      selectData: [
        {
          name: '北京市',
          value: 1
        },
        {
          name: '上海市上海市上海市上海市',
          value: 2,
          disabled: true
        },
        {
          name: '郑州市',
          value: 3
        },
        {
          name: '纽约市纽约市纽约市纽约市',
          value: 4
        },
        {
          name: '旧金山',
          value: 5
        },
        {
          name: '悉尼市',
          value: 6
        },
        {
          name: '伦敦市',
          value: 7
        },
        {
          name: '巴黎市',
          value: 8
        }
      ],
      selectedValue: ''
    }
  },
  created () {
    this.selectedValue = 1
  },
  methods: {
    getValue (name, value, index) {
      console.log('item:', name, value, index)
    },
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
}
.m-area {
	margin: 0 auto;
	width: 500px;
	height: 400px;
  border: 1px solid #1890ff;
	background: #000;
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
