<template>
  <div class="m-cascader-wrap" :style="`height: ${height}px;`">
    <VueAmazingSelector
      :style="`margin-right: ${gap}px; z-index: ${zIndex};`"
      :selectData="provinceData"
      :selectedValue="address.province"
      name="dictVal"
      value="dictKey"
      :disabled="provinceDisabled || disabled"
      :width="provinceWidth || width"
      :height="height"
      :num="num"
      :placeholder="provincePlaceholder || placeholder"
      @change="getProvinceCode" />
    <VueAmazingSelector
      :style="`margin-right: ${gap}px; z-index: ${zIndex};`"
      :selectData="cityData"
      :selectedValue="address.city"
      name="dictVal"
      value="dictKey"
      :disabled="cityDisabled || disabled"
      :width="cityWidth || width"
      :height="36"
      :num="num"
      :placeholder="cityPlaceholder || placeholder"
      @change="getCityCode" />
    <VueAmazingSelector
      :style="`z-index: ${zIndex};`"
      :selectData="areaData"
      :selectedValue="address.area"
      name="dictVal"
      value="dictKey"
      :disabled="disabled"
      :width="areaWidth || width"
      :height="height"
      :num="num"
      :placeholder="areaPlaceholder || placeholder"
      @change="getAreaCode" />
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
        type: '1',
        parentDictKey: ''
      },
      address: {
        province: '',
        city: '',
        area: ''
      },
      addressName: {
        provinceName: '',
        cityName: '',
        areaName: ''
      },
      initialProvince: true,
      initialCity: true,
      initialArea: true
    }
  },
  created () {
    this.getProvince()
  },
  methods: {
    getProvince () { // 获取省数据
      dictByType(this.regionParams).then(res => {
        console.log('province-res:', res)
        if (res.message.code === 0) {
          if (res.data.dataList && res.data.dataList.length) {
            this.provinceData = res.data.dataList
            if (this.selectedAddress.province && this.initialProvince) {
              this.initialProvince = false
              this.address.province = this.selectedAddress.province
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
            if (this.selectedAddress.city && this.initialCity) {
              this.initialCity = false
              this.address.city = this.selectedAddress.city
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
            if (this.selectedAddress.area && this.initialArea) {
              this.initialArea = false
              this.address.area = this.selectedAddress.area
            }
          }
        }
      })
    },
    getProvinceCode (name, key) { // 省下拉回调
      console.log('province:', name, key)
      if (this.address.province !== key) {
        this.address.province = key
        this.addressName.provinceName = name
        this.address.city = ''
        this.address.area = ''
        this.cityData = []
        this.areaData = []
        // 获取市下拉列表
        this.getCity(key)
      }
    },
    getCityCode (name, key) { // 市下拉回调
      console.log('city:', name, key)
      if (this.address.city !== key) {
        this.address.city = key
        this.addressName.cityName = name
        this.address.area = ''
        this.areaData = []
        // 获取区下拉列表
        this.getArea(key)
      }
    },
    getAreaCode (name, key) { // 区下拉回调
      console.log('area:', name, key)
      this.address.area = key
      this.addressName.areaName = name
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
