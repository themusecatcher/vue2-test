<template>
  <div class="m-cascader-wrap" :style="`height: ${height}px;`">
    <VueAmazingSelector
      :style="`margin-right: ${gap}px; z-index: ${zIndex};`"
      :selectData="provinceData"
      :defaultValue="defaultAddress.province"
      v-model="address.province"
      name="name"
      value="zoneCode"
      :disabled="provinceDisabled || disabled"
      :width="provinceWidth || width"
      :height="height"
      :num="num"
      :placeholder="provincePlaceholder || placeholder"
      @change="getProvinceCode" />
    <VueAmazingSelector
      :style="`margin-right: ${gap}px; z-index: ${zIndex};`"
      :selectData="cityData"
      :defaultValue="defaultAddress.city"
      v-model="address.city"
      name="name"
      value="zoneCode"
      :disabled="cityDisabled || disabled"
      :width="cityWidth || width"
      :height="36"
      :num="num"
      :placeholder="cityPlaceholder || placeholder"
      @change="getCityCode" />
    <VueAmazingSelector
      :style="`z-index: ${zIndex};`"
      :selectData="areaData"
      :defaultValue="defaultAddress.area"
      v-model="address.area"
      name="name"
      value="zoneCode"
      :disabled="disabled"
      :width="areaWidth || width"
      :height="height"
      :num="num"
      :placeholder="areaPlaceholder || placeholder"
      @change="getAreaCode" />
  </div>
</template>
<script>
import { region } from 'apis/index'
// import Vue from 'vue'
// import VueAmazingSelector from 'vue-amazing-selector'
// import 'vue-amazing-selector/lib/selector.css' // 引入样式
// Vue.use(VueAmazingSelector)
import VueAmazingSelector from './VueAmazingSelector'
export default {
  name: 'Cascader',
  components: {
    VueAmazingSelector
  },
  model: {
    prop: 'address',
    event: 'model'
  },
  props: {
    address: { // （v-model）省市区选中项
      type: Object,
      default: () => {
        return {}
      }
    },
    defaultAddress: { //  省市区初始值
      type: Object,
      default: () => {
        return {}
      }
    },
    changeOnSelect: { // 当此项为true时，点选每级菜单选项值（v-model）都会发生变化；否则只有选择区选项后选项值才会变化
      type: Boolean,
      default: false
    },
    zIndex: { // 下拉层级
      type: Number,
      default: 1
    },
    gap: { // 级联下拉框相互间隙宽度，单位px，默认8px
      type: Number,
      default: 8
    },
    provinceWidth: { // 省下拉宽度
      type: Number,
      default: null
    },
    cityWidth: { // 市下拉宽度
      type: Number,
      default: null
    },
    areaWidth: { // 区下拉宽度
      type: Number,
      default: null
    },
    width: { // 省市区统一宽度
      type: Number,
      default: 160
    },
    height: { // 下拉框高度
      type: Number,
      default: 36
    },
    provinceDisabled: { // 是否禁用省下拉
      type: Boolean,
      default: false
    },
    cityDisabled: { // 是否禁用市下拉
      type: Boolean,
      default: false
    },
    disabled: { // 省市区统一是否全部禁用
      type: Boolean,
      default: false
    },
    provincePlaceholder: { // 省占位文本
      type: String,
      default: '请选择省'
    },
    cityPlaceholder: { // 市占位文本
      type: String,
      default: '请选择市'
    },
    areaPlaceholder: { // 区占位文本
      type: String,
      default: '请选择区'
    },
    placeholder: { // 省市区统一占位文本
      type: String,
      default: '请选择'
    },
    num: { // 下拉面板最多能展示的下拉项数，超过后滚动显示
      type: Number,
      default: 6
    }
  },
  data () {
    return {
      provinceData: [],
      cityData: [],
      areaData: [],
      regionParams: {
        level: '',
        pcode: ''
      },
      addressName: {
        provinceName: '',
        cityName: '',
        areaName: ''
      }
    }
  },
  watch: {
    address (to) {
      console.log('address', to)
      if (to.province) {
        this.getCity(to.province)
      }
      // else if (this.defaultAddress.province) {
      //   this.getCity(this.defaultAddress.province)
      // }
    }
  },
  created () {
    this.getProvince()
  },
  methods: {
    getProvince () { // 获取省数据
      this.regionParams.level = 0
      this.regionParams.pcode = ''
      region(this.regionParams).then(res => {
        console.log('province-res:', res)
        if (res.message.code === 0) {
          if (res.data && res.data.length) {
            this.provinceData = res.data
            if (this.address.province) {
              this.getCity(this.address.province)
            }
          }
        }
      })
    },
    getCity (key) { // 获取市数据
      this.regionParams.level = 1
      this.regionParams.pcode = key
      region(this.regionParams).then(res => {
        console.log('city-res:', res)
        if (res.message.code === 0) {
          if (res.data && res.data.length) {
            this.cityData = res.data
            if (this.address.city) {
              this.getArea(this.address.city)
            }
          }
        }
      })
    },
    getArea (key) { // 获取区数据
      this.regionParams.level = 2
      this.regionParams.pcode = key
      region(this.regionParams).then(res => {
        console.log('area-res:', res)
        if (res.message.code === 0) {
          if (res.data && res.data.length) {
            this.areaData = res.data
          }
        }
      })
    },
    getProvinceCode (name, key) { // 省下拉回调
      console.log('province:', name, key)
      this.addressName.provinceName = name
      this.cityData = []
      this.areaData = []
      if (this.changeOnSelect) {
        this.$emit('model', { province: key, city: '', area: '' })
        this.$emit('change', { province: key, city: '', area: '' }, { provinceName: name, cityName: '', areaName: '' })
      }
      // 获取市下拉列表
      this.getCity(key)
    },
    getCityCode (name, key) { // 市下拉回调
      console.log('city:', name, key)
      this.addressName.cityName = name
      this.areaData = []
      if (this.changeOnSelect) {
        this.$emit('model', { ...this.address, city: key, area: '' })
        this.$emit('change', { ...this.address, area: '' }, { ...this.addressName, areaName: '' })
      }
      // 获取区下拉列表
      this.getArea(key)
    },
    getAreaCode (name, key) { // 区下拉回调
      console.log('area:', name, key)
      this.addressName.areaName = name
      this.$emit('model', { ...this.address, area: key })
      this.$emit('change', this.address, this.addressName)
    }
  }
}
</script>
<style lang="less" scoped>
.m-cascader-wrap {
  display: inline-block;
}
</style>
