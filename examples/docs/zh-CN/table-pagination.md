<script>
  export default {
    data() {
      return {
        formatPlatform(row, column, cellValue) {
          if (column.property === 'platform') {
            return cellValue === 1 ? 'iOS' : 'Android';
          } else {
            return cellValue;
          }
        },
        tableHeader: {
          name: "名称",
          platform: "平台",
          create_time: "创建时间"
        },
        tableData: [ {
          name: "3D宝宝巴士",
          platform: 1,
          create_time: "2017-12-25"
        },
        {
          name: "宝宝好习惯",
          platform: 2,
          create_time: "2017-12-19"
        },
        {
          name: "宝宝学汉字",
          platform: 2,
          create_time: "2017-12-12"
        },
        {
          name: "奇妙恐龙世界",
          platform: 1,
          create_time: "2017-12-08"
        }],
        tableData2: [ {
          name: "3D宝宝巴士",
          platform: 1,
          create_time: "2017-12-25"
        },
        {
          name: "宝宝好习惯",
          platform: 2,
          create_time: "2017-12-19"
        },
        {
          name: "宝宝学汉字",
          platform: 2,
          create_time: "2017-12-12"
        },
        {
          name: "奇妙恐龙世界",
          platform: 1,
          create_time: "2017-12-08"
        },{
          name: "3D宝宝巴士",
          platform: 1,
          create_time: "2017-12-25"
        },
        {
          name: "宝宝好习惯",
          platform: 2,
          create_time: "2017-12-19"
        },
        {
          name: "宝宝学汉字",
          platform: 2,
          create_time: "2017-12-12"
        },
        {
          name: "奇妙恐龙世界",
          platform: 1,
          create_time: "2017-12-08"
        },{
          name: "3D宝宝巴士",
          platform: 1,
          create_time: "2017-12-25"
        },
        {
          name: "宝宝好习惯",
          platform: 2,
          create_time: "2017-12-19"
        },
        {
          name: "宝宝学汉字",
          platform: 2,
          create_time: "2017-12-12"
        },
        {
          name: "奇妙恐龙世界",
          platform: 1,
          create_time: "2017-12-08"
        },{
          name: "3D宝宝巴士",
          platform: 1,
          create_time: "2017-12-25"
        },
        {
          name: "宝宝好习惯",
          platform: 2,
          create_time: "2017-12-19"
        },
        {
          name: "宝宝学汉字",
          platform: 2,
          create_time: "2017-12-12"
        },
        {
          name: "奇妙恐龙世界",
          platform: 1,
          create_time: "2017-12-08"
        }],
        tableWidth: {
          name: 150,
          platform: 150
        },
        pageSizes: [5, 10, 15, 20]
      }
    }
  }
</script>
<style>

</style>

## TablePagination 表格及分页组件

展示：表格，分页    
功能：前端控制分页和排序    
作者：李嘉莉

### 基本用法

:::demo
```html
<template>
  <bb-table-pagination :table-header="tableHeader" :table-data="tableData" ></bb-table-pagination>
</template>

<script>
  export default {
    data() {
      return {
        tableHeader: {
          name: "名称",
          platform: "平台",
          create_time: "创建时间"
        },
        tableData: [ {
          name: "3D宝宝巴士",
          platform: 1,
          create_time: "2017-12-25"
        },
        {
          name: "宝宝好习惯",
          platform: 2,
          create_time: "2017-12-19"
        },
        {
          name: "宝宝学汉字",
          platform: 2,
          create_time: "2017-12-12"
        },
        {
          name: "奇妙恐龙世界",
          platform: 1,
          create_time: "2017-12-08"
        }]
      }
    }
  }
</script>
```
:::

### 完整用法

1.针对每个字段可以配置列固定宽度    
2.对表格可以增加单元格的格式化函数    
3.额外的操作栏可以直接写在组件内

:::demo
```html
<template>
  <bb-table-pagination :table-header="tableHeader" :table-data="tableData2" :table-width="tableWidth" :page-sizes="pageSizes" :formatter="formatPlatform">
    <el-table-column label="操作" align="center" width="260px">
      <template slot-scope="scope">
        <el-button>编辑</el-button>
        <el-button>删除</el-button>
      </template>
    </el-table-column>
  </bb-table-pagination>
</template>

<script>
  export default {
    data() {
      return {
        formatPlatform(row, column, cellValue) {
          if (column.property === 'platform') {
            return cellValue === 1 ? 'iOS' : 'Android';
          } else {
            return cellValue;
          }
        },
        tableHeader: {
          name: "名称",
          platform: "平台",
          create_time: "创建时间"
        },
        tableData2: [ {
          name: "3D宝宝巴士",
          platform: 1,
          create_time: "2017-12-25"
        },
        {
          name: "宝宝好习惯",
          platform: 2,
          create_time: "2017-12-19"
        },
        {
          name: "宝宝学汉字",
          platform: 2,
          create_time: "2017-12-12"
        },
        {
          name: "奇妙恐龙世界",
          platform: 1,
          create_time: "2017-12-08"
        },{
          name: "3D宝宝巴士",
          platform: 1,
          create_time: "2017-12-25"
        },
        {
          name: "宝宝好习惯",
          platform: 2,
          create_time: "2017-12-19"
        },
        {
          name: "宝宝学汉字",
          platform: 2,
          create_time: "2017-12-12"
        },
        {
          name: "奇妙恐龙世界",
          platform: 1,
          create_time: "2017-12-08"
        },{
          name: "3D宝宝巴士",
          platform: 1,
          create_time: "2017-12-25"
        },
        {
          name: "宝宝好习惯",
          platform: 2,
          create_time: "2017-12-19"
        },
        {
          name: "宝宝学汉字",
          platform: 2,
          create_time: "2017-12-12"
        },
        {
          name: "奇妙恐龙世界",
          platform: 1,
          create_time: "2017-12-08"
        },{
          name: "3D宝宝巴士",
          platform: 1,
          create_time: "2017-12-25"
        },
        {
          name: "宝宝好习惯",
          platform: 2,
          create_time: "2017-12-19"
        },
        {
          name: "宝宝学汉字",
          platform: 2,
          create_time: "2017-12-12"
        },
        {
          name: "奇妙恐龙世界",
          platform: 1,
          create_time: "2017-12-08"
        }],
        tableWidth: {
          name: 150,
          platform: 150
        },
        pageSizes: [5, 10, 15, 20]
      }
    }
  }
</script>
```

:::

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| table-header | 表格头部字段 | Object | — | — |
| table-data | 表格数据，字段名同上 | Array | — | — |
| table-width | 表格列宽度 | Array | — | — |
| page-sizes | 每页条数选项 | Array | — | [15, 30, 45, 60] |
| formatter | 单元格格式化函数 | Function | — | — |
