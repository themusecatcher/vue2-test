<template>
  <div>
    <Timeline :timelineDesc="timelineDesc" :width="480" />
    <Progress :width="600" :progress="36" :strokeWidth="10" :showInfo="true" />
    <div class="m-num">
      <p class="u-num">{{ value[0] }}</p>
      <p class="u-num">{{ value[1] }}</p>
    </div>
    <div class="m-num">
      <p class="u-num">{{ value }}</p>
    </div>
    <NumSlider
      :min="0"
      :max="100"
      :initialValue="[20, 80]"
      :width="1200"
      :disabled="false"
      :range="true"
      v-model="value"
      @change="onChange"
    />
    <HorizonTimeLine :timelineData="timelineData" :activeYear="2021" />
  </div>
</template>
<script>
import NumSlider from '@/components/NumSlider'
import Progress from '@/components/Progress'
import Timeline from '@/components/Timeline'
import HorizonTimeLine from '@/components/HorizonTimeLine'
export default {
  name: 'Lines',
  components: {
    NumSlider,
    Progress,
    Timeline,
    HorizonTimeLine
  },
  data () {
    return {
      timelineDesc: ['', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.', 'Create a services site', 'Create a services site', 'Create a services site', 'Create a services site'],
      timelineData: [
        {
          year: 2022
        },
        {
          year: 2021
        },
        {
          year: 2020
        },
        {
          year: 2019
        },
        {
          year: 2018
        }
      ],
      value: [20, 80]
    }
  },
  methods: {
    onChange (val) {
      console.log('change:', val)
    }
  }
}
</script>
<style lang="less" scoped>
.m-num {
  min-width: 1200px;
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  .u-num {
    color: #333;
    font-size: 24px;
  }
}
</style>
