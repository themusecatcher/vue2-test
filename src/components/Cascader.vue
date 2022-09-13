<template>
  <div class="m-cascader-wrap" :style="`height: ${height}px;`">
    <VueAmazingSelector
      ref="province"
      :style="`margin-right: ${gap}px; z-index: ${zIndex};`"
      :selectData="provinceData"
      :selectedValue="address.province"
      name="dictVal"
      value="dictKey"
      :disabled="provinceDisabled || disabled"
      :width="provinceWidth || width"
      :height="height"
      :num="num"
      placeholder="请选择省"
      @getValue="getProvinceCode" />
    <VueAmazingSelector
      ref="city"
      :style="`margin-right: ${gap}px; z-index: ${zIndex};`"
      :selectData="cityData"
      :selectedValue="address.city"
      name="dictVal"
      value="dictKey"
      :disabled="cityDisabled || disabled"
      :width="cityWidth || width"
      :height="36"
      :num="num"
      placeholder="请选择市"
      @getValue="getCityCode" />
    <VueAmazingSelector
      ref="area"
      :style="`margin-right: ${gap}px; z-index: ${zIndex};`"
      :selectData="areaData"
      :selectedValue="address.area"
      name="dictVal"
      value="dictKey"
      :disabled="disabled"
      :width="areaWidth || width"
      :height="height"
      :num="num"
      placeholder="请选择区"
      @getValue="getAreaCode" />
  </div>
</template>
<script>
import Vue from 'vue'
import VueAmazingSelector from 'vue-amazing-selector'
import 'vue-amazing-selector/lib/selector.css' // 引入样式
Vue.use(VueAmazingSelector)
import { dictByType } from '@/api/index'
export default {
  name: 'Cascader',
  props: {
    selectedAddress: { // 省市区初始值
      type: Object,
      default: () => {
        return {}
      }
    },
    zIndex: { // 下拉层级
      type: Number,
      default: 1
    },
    gap: { // 级联下拉相互间隙宽度，单位px，默认8px
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
    width: { // 单个下拉框宽度
      type: Number,
      default: 200
    },
    height: { // 单个下拉框高度
      type: Number,
      default: 36
    },
    provinceDisabled: { // 禁用省下拉
      type: Boolean,
      default: false
    },
    cityDisabled: { // 禁用市下拉
      type: Boolean,
      default: false
    },
    disabled: { // 是否全部禁用
      type: Boolean,
      default: false
    },
    num: { // 下拉面板最多能展示的下拉项数，超过滚后动显示
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
        type: '1',
        parentDictKey: ''
      },
      address: {
        province: this.selectedAddress.province || '',
        city: this.selectedAddress.city || '',
        area: this.selectedAddress.area || ''
      },
      addressName: {
        provinceName: '',
        cityName: '',
        areaName: ''
      }
    }
  },
  created () {
    this.getProvince()
    console.log('address:', this.address)
  },
  methods: {
    getProvince () {
      dictByType(this.regionParams).then(res => {
        console.log('province-res:', res)
        if (res.message.code === 0) {
          if (res.data.dataList && res.data.dataList.length) {
            this.provinceData = res.data.dataList
            if (this.address.province) {
              this.getCity(this.address.province)
            }
          }
        }
      })
    },
    getCity (key) { // 获取市数据
      this.regionParams.parentDictKey = key
      dictByType(this.regionParams).then(res => {
        console.log('city-res:', res)
        if (res.message.code === 0) {
          if (res.data.dataList && res.data.dataList.length) {
            this.cityData = res.data.dataList
            if (this.address.city) {
              this.getArea(this.address.city)
            }
          }
        }
      })
    },
    getArea (key) { // 获取区数据
      this.regionParams.parentDictKey = key
      dictByType(this.regionParams).then(res => {
        console.log('area-res:', res)
        if (res.message.code === 0) {
          if (res.data.dataList && res.data.dataList.length) {
            this.areaData = res.data.dataList
          }
        }
      })
    },
    getProvinceCode (name, key) {
      console.log('province:', name, key)
      if (this.address.province !== key) {
        this.address.province = key
        this.addressName.provinceName = name
        this.$refs.city.selectedName = ''
        this.$refs.area.selectedName = ''
        this.address.city = ''
        this.address.area = ''
        this.cityData = []
        this.areaData = []
        // 获取市下拉列表
        this.getCity(key)
      }
    },
    getCityCode (name, key) {
      console.log('city:', name, key)
      if (this.address.city !== key) {
        this.address.city = key
        this.addressName.cityName = name
        this.$refs.area.selectedName = ''
        this.address.area = ''
        this.areaData = []
        // 获取区下拉列表
        this.getArea(key)
      }
    },
    getAreaCode (name, key) {
      console.log('area:', name, key)
      this.address.area = key
      this.addressName.areaName = name
      this.$emit('getAddress', this.address, this.addressName)
    }
  }
}
</script>
<style lang="less" scoped>
.m-cascader-wrap {
  display: inline-block;
}
</style>
