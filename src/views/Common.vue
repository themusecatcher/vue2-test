<template>
  <div class="common limit1200">
    <Switcher :defaultChecked="true" checkedInfo="开" uncheckedInfo="关" :disabled="false" />
  </div>
</template>
<script>
import { format } from 'date-fns'
import Switcher from '@/components/Switcher'
export default {
  name: 'Common',
  components: {
    Switcher
  },
  data () {
    return {
    }
  },
  mounted () {
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
