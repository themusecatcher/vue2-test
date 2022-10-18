<template>
  <div class="tree">
    <TreeChart :treeData="treeData" @clickNode="getNodeData" />
  </div>
</template>
<script>
import TreeChart from '@/components/TreeChart'
export default {
  name: 'Tree',
  components: {
    TreeChart
  },
  data () {
    return {
      treeData: {
        name: 'tree',
        children: [
          {
            name: '比较',
            value: 29,
            children: [
              {
                name: '折线图',
                value: 1
              },
              {
                name: '面积图',
                value: 2
              },
              {
                name: '柱状图',
                value: 3
              }
            ]
          },
          {
            name: '趋势趋势趋势趋势趋势趋势趋势趋势趋势趋势',
            value: 9,
            children: [
              {
                name: '折线图',
                value: 1
              },
              {
                name: '阶梯图',
                value: 2
              },
              {
                name: '面积图',
                value: 3
              },
              {
                name: '堆叠面积图',
                value: 4
              }
            ]
          },
          {
            name: '组成'
          }
        ]
      }
    }
  },
  methods: {
    getNodeData (data) {
      console.log('data:', data)
    }
  }
}
</script>
<style lang="less" scoped>
.tree {
  width: 1200px;
  height: 100vh;
  margin: 0 auto;
}
</style>
