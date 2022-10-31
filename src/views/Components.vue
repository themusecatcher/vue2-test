<template>
  <div class="components limit1200">
    <div v-show="false">
      <div class="u-tag yellow mr20" @mouseenter="onShowTip($event, '特斯拉(Tesla)是美国一家电动汽车及能源公司，总部位于帕洛阿托(Palo Alto)，市值达2100亿美元，产销电动汽车、太阳能板、及储能设备')" @mouseleave="onHideTip">特斯拉</div>
      <div class="u-tag blue" @mouseenter="onShowTip($event, '《哥斯拉大战金刚》是由美国传奇影业公司出品，亚当·温佳德执导，亚历山大·斯卡斯加德、米莉·博比·布朗、丽贝卡·豪尔、凯莉·霍特尔、布莱恩·泰里·亨利、小栗旬联合主演的动作科幻片，于2021于3月26日在中国内地上映')" @mouseleave="onHideTip">哥斯拉</div>
      <br/>
      <div class="u-tag yellow" @click="onShowMessage('This is a normal message')">哥斯拉</div>
      <div class="u-tag blue" @click="onShowNotification">特斯拉</div>
    </div>
    <Switcher v-show="false" :defaultChecked="true" checkedInfo="开" uncheckedInfo="关" :disabled="false" />
    <Timeline :timelineDesc="timelineDesc" :width="480" v-show="false" />
    <Dialog
      title="Title"
      :width="720"
      :height="480"
      :content="content"
      :footer="true"
      cancelText="取消"
      okText="确认"
      switchFullscreen
      @close="Notification"
      @cancel="onCancel"
      @ok="onConfirm"
      v-show="showDialog"
    />
    <Modal
      :title="title"
      :content="content"
      cancelText="取消"
      okText="确认"
      noticeText="知道了"
      mode="confirm"
      type="confirm"
      :center="center"
      :loading="loading"
      @cancel="onCancel"
      @ok="onConfirm"
      v-show="showModal"
      />
    <Progress :width="600" :progress="36" :strokeWidth="10" :showInfo="true" v-show="false" />
    <div class="m-num" id="num" ref="num" v-show="false">
      <p class="u-num">{{ low }}</p>
      <p class="u-num">{{ high }}</p>
    </div>
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
    <Tooltip ref="tooltip" :maxWidth="240">
      <div class="u-content" v-if="content">{{ content }}</div>
    </Tooltip>
    <Message ref="message" :duration="3000" :top="30" />
    <Notification
      ref="notification"
      placement="topRight"
      :duration="null"
      :top="30"
      @close="onNotificationClose" />
  </div>
</template>
<script>
import { format } from 'date-fns'
import NumSlider from '@/components/NumSlider'
import Tooltip from '@/components/Tooltip'
import Message from '@/components/Message'
import Notification from '@/components/Notification'
import Progress from '@/components/Progress'
import Timeline from '@/components/Timeline'
import Dialog from '@/components/Dialog'
import Modal from '@/components/Modal'
import Switcher from '@/components/Switcher'
export default {
  name: 'Components',
  components: {
    NumSlider,
    Tooltip,
    Message,
    Notification,
    Progress,
    Timeline,
    Dialog,
    Modal,
    Switcher
  },
  data () {
    return {
      showModal: false,
      title: 'Do you Want to delete these items ?',
      content: 'Some descriptions ...',
      center: true,
      loading: false,
      showDialog: false,
      // content: 'Content of the modal ...',
      low: 20,
      high: 80,
      timelineDesc: ['', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.', 'Create a services site', 'Create a services site', 'Create a services site', 'Create a services site']
    }
  },
  mounted () {
    console.log(new Date().getTime())
    console.log('format:', format(1666774388344, 'yyyy-MM-dd HH:mm:ss'))
    console.log('format:', format(new Date(), 'yyyy-MM-dd HH:mm:ss'))
  },
  methods: {
    onDialog (content) { // 调用Dialog弹出对话框
      this.content = content
      this.showDialog = true
    },
    Notification () { // 关闭dialog
      this.showDialog = false
    },
    // onCancel () { // “取消”按钮回调
    //   this.showDialog = false
    // },
    // onConfirm () { // “确定”按钮回调
    //   this.showDialog = false
    // },
    onShowModal (content) { // 调用Modal弹出对话框
      this.content = content
      this.showModal = true
    },
    onCancel () { // “取消”按钮回调
      this.showModal = false
    },
    onConfirm () { // “确定”,“知道了”按钮回调
      // this.loading = true // 开启加载状态
      this.showModal = false
    },
    lowChange (val) {
      this.low = val
      // console.log('lowChange:', val)
    },
    highChange (val) {
      this.high = val
      // console.log('highChange:', val)
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
    onNotificationClose () { // 点击默认关闭按钮时触发的回调函数
      console.log('关闭notification')
    }
  }
}
</script>
<style lang="less" scoped>
.components {
  // width: 1200px;
  // min-height: 100vh;
  margin: 60px auto;
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
  margin-top: 160px;
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
