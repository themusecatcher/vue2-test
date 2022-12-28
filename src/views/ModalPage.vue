<template>
  <div>
    <div class="u-tag yellow mr20" @click="onDialog('Some descriptions ...')">哥斯拉</div>
    <div class="u-tag blue" @click="onShowModal('Some descriptions ...')">特斯拉</div>
    <Dialog
      title="Title"
      :width="720"
      :height="480"
      :content="content"
      :footer="true"
      cancelText="取消"
      okText="确认"
      switchFullscreen
      @close="onClose"
      @cancel="onCancel"
      @ok="onConfirm"
      :visible="showDialog"
    />
    <Modal
      :title="title"
      :content="content"
      cancelText="取消"
      okText="确认"
      noticeText="知道了"
      mode="confirm"
      type="delete"
      :center="center"
      :loading="loading"
      @cancel="onCancel"
      @ok="onConfirm"
      v-show="showModal"
    />
  </div>
</template>
<script>
import Dialog from '@/components/Dialog'
import Modal from '@/components/Modal'
export default {
  name: 'ModalPage',
  components: {
    Dialog,
    Modal
  },
  data () {
    return {
      center: true,
      loading: false,
      showDialog: false,
      showModal: false,
      title: 'Do you Want to delete these items ?',
      content: 'Content of the modal ...'
    }
  },
  methods: {
    onDialog (content) { // 调用Dialog弹出对话框
      this.content = content
      this.showDialog = true
    },
    onShowModal (content) { // 调用Modal弹出对话框
      this.content = content
      this.showModal = true
    },
    onClose () { // 关闭dialog
      this.showDialog = false
    },
    onCancel () { // “取消”按钮回调
      this.showModal = false
    },
    onConfirm () { // “确定”,“知道了”按钮回调
      // this.loading = true // 开启加载状态
      this.showModal = false
    }
    // onCancel () { // “取消”按钮回调
    //   this.showDialog = false
    // },
    // onConfirm () { // “确定”按钮回调
    //   this.showDialog = false
    // }
  }
}
</script>
<style lang="less" scoped>
.u-tag {
  margin-top: 160px;
  display: inline-block;
  padding: 6px 12px;
  border-radius: 15px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  cursor: pointer;
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
