<!--
细节处理：
  1. 分页/排序功能内聚
  2. 排序处理是个小坎，最终解决了
-->
<template>
  <div class="bb-table-pagination clearfix">
    <el-table :data="currentTableData" border style="width: 100%" @sort-change="handleSort">
      <el-table-column v-for="(value, key, index) in tableHeader" :key="key" align="center" :prop="key" :label="value" sortable="custom" :formatter="formatter" :width="tableWidth[key] ? tableWidth[key] : 'auto'">
      </el-table-column>
      <slot></slot>
    </el-table>
    <el-pagination class="pull-right" @size-change="handleSizeChange" :current-page.sync="currentPage" :page-sizes="pageSizes" :page-size="limit" layout="total, sizes, prev, pager, next, jumper" :total="total">
    </el-pagination>
  </div>
</template>
<script>
import { orderBy } from './util';
export default {
  name: 'BbTablePagination',
  props: {
    tableHeader: {
      type: Object,
      default() {
        return {};
      }
    },
    tableData: {
      type: Array,
      default() {
        return [];
      }
    },
    formatter: {
      type: Function,
      default: (row, column, cellValue) => cellValue
    },
    tableWidth: {
      type: Object,
      default() {
        return {};
      }
    },
    pageSizes: {
      type: Array,
      default() {
        return [15, 30, 45, 60];
      }
    }
  },
  data() {
    return {
      // 分页
      limit: 15,
      currentPage: 1,
      // 排序处理
      sortMethod: data => data
    };
  },
  computed: {
    offset() {
      return this.limit * (this.currentPage - 1);
    },
    total() {
      return this.tableData.length;
    },
    currentTableData() {
      const end = this.offset + this.limit;
      return this.sortMethod(this.tableData).slice(this.offset, end);
    }
  },
  watch: {
    tableData() {
      // 切换数据来源，分页重置
      this.currentPage = 1;
    }
  },
  created() {
    this.limit = (this.pageSizes.length > 0 && this.pageSizes[0]) || 15;
  },
  methods: {
    // 分页
    handleSizeChange(val) {
      this.limit = val;
      this.currentPage = 1;
    },
    // 排序
    handleSort({ prop, order }) {
      this.currentPage = 1;
      this.sortMethod = data => orderBy(data, prop, order, null);
    }
  }
};
</script>
<style rel="stylesheet/scss" lang="scss">
  .clearfix {
    &:after {
      visibility: hidden;
      display: block;
      font-size: 0;
      content: " ";
      clear: both;
      height: 0;
    }
  }
  .pull-right {
    float: right;
  }
</style>