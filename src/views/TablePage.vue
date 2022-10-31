<template>
  <div>
    <Table
      :columns="columns"
      :dataSource="tableData"
      :pagination="{
        p: queryParams.p,
        pageSize: queryParams.pageSize
      }"
      :hideOnSinglePage="false"
      :total="total"
      :loading="tableLoading"
      @change="onChangeTable"
    >
      <!-- 配置指定列数据 -->
      <template #name="{ data: record }">
        hello {{ record.name }}
      </template>
      <template v-slot:job="{ data: record }">
        hi {{ record.job }}
      </template>
    </Table>
  </div>
</template>
<script>
import Table from '@/components/Table'
export default {
  name: 'TablePage',
  components: {
    Table
  },
  data () {
    return {
      tableLoading: false,
      total: 11,
      queryParams: {
        pageSize: 5,
        p: 1,
        mod: 'search'
      },
      columns: [
        {
          title: '名字',
          width: 100,
          dataIndex: 'name',
          slot: 'name'
        },
        {
          title: '年龄',
          width: 100,
          dataIndex: 'age'
        },
        {
          title: '职业',
          width: 100,
          dataIndex: 'job',
          slot: 'job'
        },
        {
          title: '性别',
          width: 100,
          dataIndex: 'sex'
        },
        {
          title: '地址',
          width: 120,
          dataIndex: 'address'
        }
      ],
      tableData: [
        {
          name: 'Stephen',
          age: 30,
          job: 'player',
          sex: '男',
          address: 'CaliforniaCaliforniaCaliforniaCaliforniaCaliforniaCalifornia'
        },
        {
          name: 'Leo',
          age: 36,
          job: 'actor',
          sex: '男',
          address: 'LA'
        },
        {
          name: 'Mr.Dear',
          age: 23,
          job: 'boy',
          sex: '男',
          address: 'Beijing'
        },
        {
          name: 'superman',
          age: 32,
          job: 'boy',
          sex: '男',
          address: 'US'
        }
      ]
    }
  },
  methods: {
    getData () {
      this.tableLoading = true
      // 调用分页接口获取列表数据
    },
    onChangeTable (pagination) {
      console.log('pagination:', pagination)
      this.queryParams.p = pagination.p
      this.queryParams.pageSize = pagination.pageSize
      this.getData()
    }
  }
}
</script>
<style lang="less" scoped>
</style>
