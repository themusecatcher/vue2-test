<template>
  <div class="common limit1200">
    <Switcher :defaultChecked="true" checkedInfo="开" uncheckedInfo="关" :disabled="false" />
    <Breadcrumb class="mt60" :routes="routes" :height="60" />
  </div>
</template>
<script>
import { format } from 'date-fns'
import Switcher from '@/components/Switcher'
import Breadcrumb from '@/components/Breadcrumb'
export default {
  name: 'Common',
  components: {
    Switcher,
    Breadcrumb
  },
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
