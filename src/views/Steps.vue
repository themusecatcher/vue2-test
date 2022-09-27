<template>
  <div class="steps">
    <Steps
      :currentStep="3"
      :totalSteps="5"
      :stepsLabel="stepsLabel"
      :stepsDesc="stepsDesc"
      :totalWidth="900"
      :descMaxWidth="160"
      @change="onChange" />
  </div>
</template>
<script>
import Steps from '@/components/Steps'
export default {
  components: {
    Steps
  },
  data () {
    return {
      // stepsLabel: [],
      stepsLabel: ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5'],
      // stepsDesc: []
      stepsDesc: ['description 1', 'description 2', 'description 3', 'description 4', 'description 5']
    }
  },
  methods: {
    onChange (index) { // 父组件获取切换后的选中步骤
      console.log('current:', index)
    }
  }
}
</script>
<style lang="less" scoped>

</style>