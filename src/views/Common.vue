<template>
  <div class="components limit1200">
    <Switcher v-show="false" :defaultChecked="true" checkedInfo="开" uncheckedInfo="关" :disabled="false" />
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
    console.log(new Date().getTime())
    console.log('format:', format(1666774388344, 'yyyy-MM-dd HH:mm:ss'))
    console.log('format:', format(new Date(), 'yyyy-MM-dd HH:mm:ss'))
  },
  methods: {
  }
}
</script>
<style lang="less" scoped>
.components {
  // width: 1200px;
  // min-height: 100vh;
  margin: 60px auto;
}
</style>
