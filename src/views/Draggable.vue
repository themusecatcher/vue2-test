<template>
  <div class="draggable">
    <draggable
      v-model="dragData"
      group="player"
      animation="500"
      :disabled="false"
      delay="0"
      ghostClass="ghost"
      chosenClass="chosen"
      @start="onStart"
      @end="onEnd"
      :move="onMove">
      <div class="u-player" v-for="(data, index) in dragData" :key="index">{{ data.name || '--'}} : {{ data.num }}</div>
    </draggable>
  </div>
</template>
<script>
import draggable from 'vuedraggable'
export default {
  name: 'Tree',
  components: {
    draggable
  },
  data () {
    return {
      dragData: [
        {
          name: 'curry',
          num: 30
        },
        {
          name: 'klay',
          num: 11
        },
        {
          name: 'kobe',
          num: 24
        },
        {
          name: 'james',
          num: 23
        },      
        {
          name: 'leo',
          num: 36
        }
      ]
    }
  },
  methods: {
    onStart (e) { // 开始拖拽事件
      console.log('start:', e)
      console.log('拖拽操作前的索引oldIndex:', e.oldIndex)
      console.log('拖拽完成后的索引newIndex:', e.newIndex)
    },
    onEnd (e) { // 结束拖拽事件
      console.log('end:', e)
      console.log('拖拽操作前的索引oldIndex:', e.oldIndex)
      console.log('拖拽完成后的索引newIndex:', e.newIndex)
    },
    onMove (e, originalEvent) { // 拖拽move事件回调
      console.log('move:', e)
      console.log('originalEvent:', originalEvent)
      // 不允许停靠
      if (e.relatedContext.element.num === 30) return false
      // 不允许拖拽
      if (e.draggedContext.element.num === 11) return false
      return true;
    }
  }
}
</script>
<style lang="less" scoped>
.draggable {
  width: 1200px;
  height: 100vh;
  margin: 0 auto;
  .u-player {
    margin-top: 30px;
    display: inline-block;
    color: #0079DD;
    background: #F0F7FD;
    font-size: 16px;
    font-weight: 500;
    padding: 8px 18px;
    border-radius: 6px;
    text-align: center;
    cursor: move;
    &:not(:last-child) {
      margin-right: 16px;
    }
  }
}
.chosen { // 选择元素的样式
  background: #666 !important;
  color: #fff !important;
}
.ghost { // 目标位置占位符的样式及需要停靠位置的样式
  background: #1890FF !important;
}
</style>