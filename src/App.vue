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
    <Timeline :timelineDesc="timelineDesc" :width="480" v-show="false" />
    <Dialog
      title="Title"
      :width="720"
      :content="content"
      :footer="true"
      cancelText="取消"
      okText="确认"
      @close="onClose"
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
    <Table
      v-show="false"
      :columns="columns"
      :dataSource="tableData"
      :pagination="{
        p: queryParams.p,
        pageSize: queryParams.pageSize
      }"
      :hideOnSinglePage="false"
      :total="total"
      :loading="tableLoading"
      @change="onChangeTable"
    >
      <!-- 配置指定列数据 -->
      <!-- <template #name="{ data: record }">
        hello {{ record.name }}
      </template>
      <template v-slot:job="{ data: record }">
        hi {{ record.job }}
      </template> -->
    </Table>
    <TreeChart :treeData="treeData" />
    <div class="loader triangle"><svg viewBox="0 0 86 80"><polygon points="43 8 79 72 7 72" stroke="url(#gradient)"></polygon></svg></div>
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
import Loading from '@/components/Loading'
import Progress from '@/components/Progress'
import Timeline from '@/components/Timeline'
import Dialog from '@/components/Dialog'
import Modal from '@/components/Modal'
import Table from '@/components/Table'
import TreeChart from '@/components/TreeChart'
export default {
  name: 'App',
  components: {
    NumSlider,
    Tooltip,
    Message,
    Spin,
    Loading,
    Progress,
    Timeline,
    Dialog,
    Modal,
    Table,
    TreeChart
  },
  data () {
    return {
      tableLoading: false,
      total: 11,
      queryParams: {
				pageSize: 5,
				p: 1,
				mod: 'search'
			},
      columns: [
        {
          title: '名字',
          width: 100,
          dataIndex: 'name',
          slot: 'name'
        },
        {
          title: '年龄',
          width: 100,
          dataIndex: 'age'
        },
        {
          title: '职业',
          width: 100,
          dataIndex: 'job',
          slot: 'job'
        },
        {
          title: '性别',
          width: 100,
          dataIndex: 'sex'
        },
        {
          title: '地址',
          width: 120,
          dataIndex: 'address'
        }
      ],
      tableData: [
        {
          name: 'Stephen',
          age: 30,
          job: 'player',
          sex: '男',
          address: 'CaliforniaCaliforniaCaliforniaCaliforniaCaliforniaCalifornia'
        },
        {
          name: 'Leo',
          age: 36,
          job: 'actor',
          sex: '男',
          address: 'LA'
        },
        {
          name: 'Mr.Dear',
          age: 23,
          job: 'boy',
          sex: '男',
          address: 'Beijing'
        },
        {
          name: 'superman',
          age: 32,
          job: 'boy',
          sex: '男',
          address: 'US'
        }
      ],
      showModal: false,
      title: 'Do you Want to delete these items ?',
      content: 'Some descriptions ...',
      loading: false,
      center: true,
      showDialog: false,
      tip: '加载中...',
      // content: 'Content of the modal ...',
      low: 20,
      high: 80,
      timelineDesc: ['', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.', 'Create a services site', 'Create a services site', 'Create a services site', 'Create a services site'],
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
      selectedValue: '',
      treeData: {
        name: 'tree',
        children: [
          {
            name: '比较',
            value: 29,
            children: [
              {
                name: '折线图',
                value: 1
              },
              {
                name: '面积图',
                value: 2
              },
              {
                name: '柱状图',
                value: 3
              }
            ]
          },
          {
            name: '趋势趋势趋势趋势趋势趋势趋势趋势趋势趋势',
            value: 9,
            children: [
              {
                name: '折线图',
                value: 1
              },
              {
                name: '阶梯图',
                value: 2
              },
              {
                name: '面积图',
                value: 3
              },
              {
                name: '堆叠面积图',
                value: 4
              }
            ]
          },
          {
            name: '组成'
          }
        ]
      }
    }
  },
  created () {
    this.selectedValue = 1
  },
  methods: {
    onChangeTable (pagination) {
      console.log('pagination:', pagination)
      this.queryParams.p = pagination.p
      this.queryParams.pageSize = pagination.pageSize
      this.getData()
    },
    getData () {
      this.tableLoading = true
      // 调用分页接口获取列表数据
    },
    onDialog (content) { // 调用Dialog弹出对话框
      this.content = content
      this.showDialog = true
    },
    onClose () { // 关闭dialog
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
.loader {
  --duration: 3s;
  width: 44px;
  height: 44px;
  position: relative;
  display: inline-block;
  margin: 0 16px;
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
