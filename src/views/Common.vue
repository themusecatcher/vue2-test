<template>
  <div class="common limit1200">
    <Switcher :defaultChecked="true" checkedInfo="开" uncheckedInfo="关" :disabled="false" />
    <Breadcrumb class="mt60" :routes="routes" :height="60" separator="/" />
    <Three />
  </div>
</template>
<script>
import Vue from 'vue'
import { format } from 'date-fns'
import Switcher from '@/components/Switcher'
import Breadcrumb from '@/components/Breadcrumb'
import Three from 'components/Three'
export default {
  name: 'Common',
  components: {
    Switcher,
    Breadcrumb,
    Three
  },
  props: ['route', 'name'],
  data () {
    return {
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
      ]
    }
  },
  mounted () {
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
