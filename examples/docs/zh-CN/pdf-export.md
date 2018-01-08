<script>
  var iconList = require('examples/icon.json');

  export default {
    data() {
      return {
        icons: iconList,
        element() {
        	return document.getElementsByClassName('icon-list')[0];
        },
        element2() {
        	return document.getElementsByClassName('el-scrollbar__view')[0];
        }
      };
    },

    methods: {
      handleExport() {
        const el = this.$refs['pdf-export'];
        el.exportToPDF();
      },
      handleExport2() {
        const el = this.$refs['pdf-export2'];
        el.exportToPDF();
      }
    }
  }
</script>
<style>
  .page-component .content > ul.icon-list {
    overflow: hidden;
    list-style: none;
    padding: 0;
    border: solid 1px #eaeefb;
    border-radius: 4px;
  }
  .icon-list li {
    float: left;
    width: 16.66%;
    text-align: center;
    height: 120px;
    line-height: 120px;
    color: #666;
    font-size: 13px;
    transition: color .15s linear;

    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    margin-right: -1px;
    margin-bottom: -1px;

    @utils-vertical-center;

    span {
      display: inline-block;
      line-height: normal;
      vertical-align: middle;
      font-family: 'Helvetica Neue',Helvetica,'PingFang SC','Hiragino Sans GB','Microsoft YaHei',SimSun,sans-serif;
      color: #99a9bf;
    }
    
    i {
      display: block;
      font-size: 32px;
      margin-bottom: 15px;
      color: #606266;
    }
    
    .icon-name {
      display: inline-block;
      padding: 0 3px;
      height: 1em;
      color: #606266;
    }
    
    &:hover {
      color: rgb(92, 182, 255);
    }
  }
</style>

## PdfExport 导出为PDF

将指定元素转为PDF输出    
作者: 招智

### 基础使用方法

导出下面的图表合集

:::demo
```html
<bb-pdf-export ref="pdf-export" :element="element">
  <el-button type="primary" @click="handleExport">导出为PDF <i class="el-icon-document"></i></el-button>
</bb-pdf-export>

<script>
	export default {
		data() {
      return {
        element() {
        	return document.getElementsByClassName('icon-list')[0];
        }
      };
    },

    methods: {
      handleExport() {
        const el = this.$refs['pdf-export'];
        el.exportToPDF();
      }
    }
	}
</script>
```
:::

### 导出有滚动条的元素

带有滚动条的元素， 会执行`el.parentNode.scrollTop = 0`，不然滚动条上方区域截取不到。

:::demo
```html
<bb-pdf-export ref="pdf-export2" :element="element2">
  <el-button type="primary" @click="handleExport2">导出为PDF <i class="el-icon-document"></i></el-button>
</bb-pdf-export>

<script>
	export default {
		data() {
      return {
        element2() {
        	return document.getElementsByClassName('el-scrollbar__view')[0];
        }
      };
    },

    methods: {
      handleExport2() {
        const el = this.$refs['pdf-export2'];
        el.exportToPDF();
      }
    }
	}
</script>
```
:::

### 图标集合

<ul class="icon-list">
  <li v-for="name in icons" :key="name">
    <span>
      <i :class="'el-icon-' + name"></i>
      <span class="icon-name">{{'el-icon-' + name}}</span>
    </span>
  </li>
</ul>

:::tip

html2canvas.js 超出可视区域截图是空白的、分辨率优化、文字模糊问题, 采用下面的pr对源码进行修改

https://github.com/niklasvh/html2canvas/commit/62b6973b5a4ba7376367bb090424066a374abe9e
https://github.com/niklasvh/html2canvas/issues/541
https://github.com/niklasvh/html2canvas/issues/576
https://github.com/niklasvh/html2canvas/pull/1087

修改的代码：源码搜索(change start、change end包裹的代码, 注释掉的为源代码, 没注释掉的是修改后的代码)
:::

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| element | 返回选取的元素 | function | — | — |
| name | 文件名 | string | — | Date.now() |
| background | 背景色 | string | — | #fff |

### Methods
| 方法名 | 说明 | 参数 |
|---------- |-------- |---------- |
| exportToPDF | 导出为PDF方法 | — |
