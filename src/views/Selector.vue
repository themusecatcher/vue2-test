<template>
  <div class="selector">
    <VueAmazingSelector
      class="mt60"
      :selectData="selectData"
      :defaultValue="defaultSelValue"
      name="label"
      value="value"
      placeholder="请选择城市"
      :disabled="false"
      :width="160"
      :height="36"
      :num="6"
      v-model="selectedValue"
      @change="onChange" />
    <br/>
    <Cascader
      class="mt60"
      :defaultAddress="defaultAddress"
      v-model="address"
      changeOnSelect
      :zIndex="9"
      :gap="8"
      :provinceWidth="120"
      :cityWidth="120"
      :areaWidth="120"
      :width="120"
      :height="36"
      :provinceDisabled="false"
      :cityDisabled="false"
      :disabled="false"
      :num="6"
      @change="getAddress" />
    <a-cascader
      style="width: 280px; margin-left: 20px;"
      placeholder="请选择"
      size="large"
      v-model="defaultValue"
      :options="options"
      change-on-select
      @change="onChange" />
  </div>
</template>
<script>
import Cascader from '@/components/Cascader'
// import Vue from 'vue'
// import VueAmazingSelector from 'vue-amazing-selector'
// import 'vue-amazing-selector/lib/selector.css' // 引入相关样式
// Vue.use(VueAmazingSelector)
import VueAmazingSelector from 'components/VueAmazingSelector'
export default {
  name: 'Selector',
  components: {
    VueAmazingSelector,
    Cascader
  },
  data () {
    return {
      // defaultAddress: {},
      defaultAddress: {
        province: '310000',
        city: '310000',
        area: '310230'
      },
      // address: {},
      address: {
        province: '110000',
        city: '110000',
        area: '110101'
      },
      selectData: [
        {
          label: '北京市',
          value: 1
        },
        {
          label: '上海市上海市上海市上海市',
          value: 2,
          disabled: true
        },
        {
          label: '郑州市',
          value: 3
        },
        {
          label: '纽约市纽约市纽约市纽约市',
          value: 4
        },
        {
          label: '旧金山',
          value: 5
        },
        {
          label: '悉尼市',
          value: 6
        },
        {
          label: '伦敦市',
          value: 7
        },
        {
          label: '巴黎市',
          value: 8
        }
      ],
      defaultSelValue: 2,
      selectedValue: 1,
      defaultValue: ['zhejiang', 'hangzhou', 'xihu'],
      options: [
        {
          value: 'zhejiang',
          label: 'Zhejiang',
          children: [
            {
              value: 'hangzhou',
              label: 'Hangzhou',
              children: [
                {
                  value: 'xihu',
                  label: 'West Lake'
                }
              ]
            }
          ]
        },
        {
          value: 'jiangsu',
          label: 'Jiangsu',
          children: [
            {
              value: 'nanjing',
              label: 'Nanjing',
              children: [
                {
                  value: 'zhonghuamen',
                  label: 'Zhong Hua Men'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  watch: {
    selectedValue (to) {
      console.log('selectedValue:', to)
    },
    address (to) {
      console.log('address:', to)
    }
  },
  mounted () {
    setTimeout(() => {
      this.address = {
        province: '110000',
        city: '110000',
        area: '110101'
      }
    }, 3000)
  },
  methods: {
    onChange (name, value, index) {
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
.m-tab {
  border: 1px solid @themeColor;
  padding: 60px;
  .u-tab {
    width: 60px;
    height: 60px;
    background: @themeColor;
  }
}
</style>
