<template>
  <div class="common limit1200">
    <Button
      type="default"
      effect="reverse"
      size="middle"
      class="mr20"
      :width="120"
      :height="40"
      :borderRadius="4"
      :disabled="false"
      :center="false"
      @click="onClick">
      按钮Button
    </Button>
    <Button
      class="mr20"
      type="primary"
      effect="reverse"
      size="middle"
      :width="120"
      :height="40"
      :borderRadius="4"
      :disabled="false"
      :center="false"
      @click="onClick">
      按钮Button
    </Button>
    <Button
      type="danger"
      effect="reverse"
      size="middle"
      :width="120"
      :height="40"
      :borderRadius="4"
      :disabled="false"
      :center="false"
      @click="onClick">
      按钮Button
    </Button>
    <a-button size="default" type="primary">
      Primary
    </a-button>
    <Switcher v-show="true" :defaultChecked="true" v-model="checked" checkedInfo="开" uncheckedInfo="关" :disabled="false" />
    <a-switch :defaultChecked="true" />
    <Breadcrumb class="mt60" :routes="routes" :height="60" separator="" />
    <Three />
  </div>
</template>
<script>
import Vue from 'vue'
import { format } from 'date-fns'
import Button from '@/components/Button'
import Switcher from '@/components/Switcher'
import Breadcrumb from '@/components/Breadcrumb'
import Three from 'components/Three'
import md5 from 'md5'
export default {
  name: 'Common',
  components: {
    Button,
    Switcher,
    Breadcrumb,
    Three
  },
  props: ['route', 'name'],
  data () {
    return {
      checked: true,
      player: {
        num: 30,
        age: '34'
      },
      players: ['curry', 'kobe'],
      routes: [
        {
          path: '/first',
          query: { id: 1, tab: 2 },
          name: '一级路由'
        },
        {
          path: '/second',
          name: '二级路由'
        },
        {
          path: 'third',
          name: '三级路由三级路由三级路由三级路由三级路由三级路由三级路由'
        }
      ],
      secret: '5f39957fcae1c4e1d2d8a25ae38e5ec6',
      params: {
        appkey: 'gzwl_wz_b804cc6805',
        timestamp: 1671518625608,
        platformId: 25,
        tag: 'chezuojigou',
        pageSize: 999,
        order: {
          1: 'sort,1'
        }
      }
    }
  },
  mounted () {
    console.log(md5(this.getSigncode(this.params, 'get')))
    console.log('route:', this.route)
    console.log('$route:', this.$route)
    console.log('$route === route:', this.$route === this.route) // true
    console.log('name:', this.name)
    // 包含了父作用域中不作为 prop 被识别 (且获取) 的 attribute 绑定 (class 和 style 除外)。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (class 和 style 除外)，并且可以通过 v-bind="$attrs" 传入内部组件——在创建高级别的组件时非常有用。
    console.log('$attrs:', this.$attrs)
    console.log('$route的路由参数params:', this.$route.params)
    console.log('$route的查询参数query:', this.$route.query)
    if ('age' in this.player) {
      console.log('age')
    }
    if (2 in this.players) {
      console.log('curry')
    }
    console.log('global:', this.$global)
    console.log(new Date().getTime())
    console.log('format:', format(1666774388344, 'yyyy-MM-dd HH:mm:ss'))
    console.log('format:', format(new Date(), 'yyyy-MM-dd HH:mm:ss'))
    console.log('set:', Vue.set === this.$set)
  },
  methods: {
    getSigncode (params, type) {
      const objectKeyArr = Object.keys(params)
      objectKeyArr.sort()
      console.log(objectKeyArr)
      let str = ''
      objectKeyArr.forEach(keys => {
        if (type === 'get') {
          if (typeof params[keys] === 'object') {
            str += keys
            str += JSON.stringify(params[keys])
          } else {
            str += keys
            str += params[keys]
          }
        } else {
          if ((typeof params[keys] === 'string') || (typeof params[keys] === 'number')) {
            str += keys
            str += params[keys]
          }
        }
      })
      str = this.secret + str + this.secret
      str = md5(str.toUpperCase())
      return str
    },
    onClick () {
      console.log('click')
    },
    onChange (value) {
      console.log(value)
    }
  }
}
</script>
<style lang="less" scoped>
.common {
  // width: 1200px;
  // min-height: 100vh;
  margin: 60px auto;
}
</style>
