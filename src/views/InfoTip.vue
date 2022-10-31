<template>
  <div>
    <div class="u-tag yellow mr20" @mouseenter="onShowTip($event, '特斯拉(Tesla)是美国一家电动汽车及能源公司，总部位于帕洛阿托(Palo Alto)，市值达2100亿美元，产销电动汽车、太阳能板、及储能设备')" @mouseleave="onHideTip">特斯拉</div>
    <div class="u-tag blue" @mouseenter="onShowTip($event, '《哥斯拉大战金刚》是由美国传奇影业公司出品，亚当·温佳德执导，亚历山大·斯卡斯加德、米莉·博比·布朗、丽贝卡·豪尔、凯莉·霍特尔、布莱恩·泰里·亨利、小栗旬联合主演的动作科幻片，于2021于3月26日在中国内地上映')" @mouseleave="onHideTip">哥斯拉</div>
    <br/>
    <div class="u-tag yellow mr20" @click="onShowMessage('This is a normal message')">哥斯拉</div>
    <div class="u-tag blue" @click="onShowNotification">特斯拉</div>
    <Tooltip ref="tooltip" :maxWidth="240">
      <div class="u-content" v-if="content">{{ content }}</div>
    </Tooltip>
    <Message ref="message" :duration="3000" :top="30" />
    <Notification
      ref="notification"
      placement="topRight"
      :duration="null"
      :top="30"
      @close="onClose" />
  </div>
</template>
<script>
import Tooltip from '@/components/Tooltip'
import Message from '@/components/Message'
import Notification from '@/components/Notification'
export default {
  name: 'InfoTip',
  components: {
    Tooltip,
    Message,
    Notification
  },
  data () {
    return {
      content: ''
    }
  },
  methods: {
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
    },
    onShowNotification () {
      const notification = {
        title: 'Notification Title',
        description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
      }
      // this.$refs.notification.open(notification) // 默认使用
      // this.$refs.notification.info(notification) // info调用
      // this.$refs.notification.success(notification) // success调用
      // this.$refs.notification.error(notification) // error调用
      this.$refs.notification.warning(notification) // warning调用
    },
    onClose () { // 点击默认关闭按钮时触发的回调函数
      console.log('关闭notification')
    }
  }
}
</script>
<style lang="less" scoped>
.u-tag {
  margin-top: 60px;
  display: inline-block;
  padding: 6px 12px;
  border-radius: 15px;
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
