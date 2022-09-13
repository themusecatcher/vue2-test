<template>
  <div class="selector">
    <VueAmazingSelector
      class="mt60"
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
    <br/>
    <Cascader
      :selectedAddress="selectedAddress"
      :zIndex="9"
      :gap="8"
      :provinceWidth="160"
      :cityWidth="160"
      :areaWidth="160"
      :width="160"
      :height="36"
      :provinceDisabled="false"
      :cityDisabled="false"
      :disabled="false"
      :num="8"
      @getAddress="getAddress" />
  </div>
</template>
<script>
import Vue from 'vue'
import VueAmazingSelector from 'vue-amazing-selector'
import 'vue-amazing-selector/lib/selector.css' // 引入相关样式
Vue.use(VueAmazingSelector)
import Cascader from '@/components/Cascader'
export default {
  name: 'Select',
  components: {
    Cascader
  },
  data () {
    return {
      selectedAddress: {
        province: 'P29',
        city: 'C247',
        area: 'D2067'
      },
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
    this.selectedValue = ''
  },
  methods: {
    getValue (name, value, index) {
      console.log('item:', name, value, index)
    },
    getAddress (address, addressName) {
      console.log('address:', address)
      console.log('addressName:', addressName)
    }
  }
}
</script>
<style lang="less" scoped>
.selector {
  width: 1200px;
  margin: 0 auto;
}
</style>
