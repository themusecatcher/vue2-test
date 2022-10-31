<template>
  <div>
    <Timeline :timelineDesc="timelineDesc" :width="480" />
    <Progress :width="600" :progress="36" :strokeWidth="10" :showInfo="true" />
    <div class="m-num" id="num" ref="num">
      <p class="u-num">{{ low }}</p>
      <p class="u-num">{{ high }}</p>
    </div>
    <div class="slider">
      <NumSlider
        :min="0"
        :max="100"
        :initialMin="20"
        :initialMax="80"
        :width="1200"
        :disabled="false"
        @lowChange="lowChange"
        @highChange="highChange"
      />
    </div>
  </div>
</template>
<script>
import NumSlider from '@/components/NumSlider'
import Progress from '@/components/Progress'
import Timeline from '@/components/Timeline'
export default {
  name: 'Lines',
  components: {
    NumSlider,
    Progress,
    Timeline
  },
  data () {
    return {
      low: 20,
      high: 80,
      timelineDesc: ['', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.', 'Create a services site', 'Create a services site', 'Create a services site', 'Create a services site']
    }
  },
  methods: {
    lowChange (val) {
      this.low = val
      console.log('lowChange:', val)
    },
    highChange (val) {
      this.high = val
      console.log('highChange:', val)
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
.slider {
  margin: 30px auto 120px;
}
</style>
