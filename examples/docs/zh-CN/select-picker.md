<script>
  export default {
    data() {
      return {
        list: null,
        options: [{
          value: "150000198302198497",
          label: "自己上厕所"
        },
        {
          value: "820000199705024015",
          label: "宝宝认工程车"
        },
        {
          value: "540000199907069628",
          label: "宝宝认蚂蚁"
        },
        {
          value: "220000199306066910",
          label: "猜猜我在哪"
        },
        {
          value: "610000201210180121",
          label: "梦幻泡泡鱼"
        },
        {
          value: "520000198509234351",
          label: "宝宝乘车安全"
        },
        {
          value: "500000200810260897",
          label: "宝宝医院"
        },
        {
          value: "510000201207249059",
          label: "森林动物"
        },
        {
          value: "410000198402093418",
          label: "白天黑夜"
        },
        {
          value: "320000197508128336",
          label: "宝宝童谣"
        },
        {
          value: "36000019980730624X",
          label: "宝宝学蔬菜"
        },
        {
          value: "310000201504155465",
          label: "有趣的对比"
        },
        {
          value: "810000199104264089",
          label: "宝宝爱刷牙"
        },
        {
          value: "310000200707280173",
          label: "宝宝小邮局"
        },
        {
          value: "120000198307166683",
          label: "宝宝宇航员"
        },
        {
          value: "370000200010106862",
          label: "数学农场"
        },
        {
          value: "320000200211305690",
          label: "宝宝节奏大师"
        },
        {
          value: "820000197606126287",
          label: "宝宝美食街"
        },
        {
          value: "210000198711223004",
          label: "形状颜色大小"
        },
        {
          value: "120000201102026622",
          label: "宝宝小船长"
        },
        {
          value: "210000199302076378",
          label: "宝宝出行安全"
        },
        {
          value: "120000198605168062",
          label: "宝宝爱自然"
        },
        {
          value: "320000200706291964",
          label: "宝宝爱整理"
        },
        {
          value: "610000198009047252",
          label: "讲故事之彩虹岛"
        },
        {
          value: "510000197607279047",
          label: "宝宝爱记忆"
        },
        {
          value: "350000198711210407",
          label: "妙妙爱干净"
        },
        {
          value: "81000020160622444X",
          label: "宝宝画彩蛋"
        },
        {
          value: "120000197010261546",
          label: "宝宝拼拼乐"
        },
        {
          value: "820000200510048266",
          label: "宝宝职业大全"
        },
        {
          value: "330000199908114428",
          label: "宝宝点点画"
        }],
        options2: [{
          value: "150000198302198497",
          label: "自己上厕所"
        },
        {
          value: "820000199705024015",
          label: "宝宝认工程车"
        },
        {
          value: "540000199907069628",
          label: "宝宝认蚂蚁"
        },
        {
          value: "220000199306066910",
          label: "猜猜我在哪"
        },
        {
          value: "610000201210180121",
          label: "梦幻泡泡鱼"
        },
        {
          value: "520000198509234351",
          label: "宝宝乘车安全"
        },
        {
          value: "500000200810260897",
          label: "宝宝医院"
        },
        {
          value: "510000201207249059",
          label: "森林动物"
        }],
        options3: [{
          value: "150000198302198497",
          label: "自己上厕所"
        },
        {
          value: "820000199705024015",
          label: "宝宝认工程车"
        },
        {
          value: "540000199907069628",
          label: "宝宝认蚂蚁",
          disabled: true
        },
        {
          value: "220000199306066910",
          label: "猜猜我在哪"
        },
        {
          value: "610000201210180121",
          label: "梦幻泡泡鱼"
        },
        {
          value: "520000198509234351",
          label: "宝宝乘车安全"
        },
        {
          value: "500000200810260897",
          label: "宝宝医院"
        },
        {
          value: "510000201207249059",
          label: "森林动物"
        },
        {
          value: "410000198402093418",
          label: "白天黑夜",
          disabled: true
        },
        {
          value: "320000197508128336",
          label: "宝宝童谣"
        },
        {
          value: "36000019980730624X",
          label: "宝宝学蔬菜"
        },
        {
          value: "310000201504155465",
          label: "有趣的对比"
        },
        {
          value: "810000199104264089",
          label: "宝宝爱刷牙"
        }],
        options4: [{
          label: '1-3岁',
          options: [{
            value: '810000199104264089',
            label: '宝宝爱刷牙'
          }, {
            value: '320000197508128336',
            label: '宝宝童谣'
          }, {
            value: '310000201504155465',
            label: '有趣的对比'
          }, {
            value: '36000019980730624X',
            label: '宝宝学蔬菜'
          }, {
            value: '410000198402093418',
            label: '白天黑夜'
          }]
        }, {
          label: '4-6岁',
          options: [{
            value: "510000197607279047",
            label: "宝宝爱记忆"
          },
          {
            value: "350000198711210407",
            label: "妙妙爱干净"
          },
          {
            value: "81000020160622444X",
            label: "宝宝画彩蛋"
          },
          {
            value: "120000197010261546",
            label: "宝宝拼拼乐"
          },
          {
            value: "820000200510048266",
            label: "宝宝职业大全"
          }]
        }],
        options5: [],
        options6: [{
          value: 'HTML',
          label: 'HTML'
        }, {
          value: 'CSS',
          label: 'CSS'
        }, {
          value: 'JavaScript',
          label: 'JavaScript'
        }],
        cities: [{
          value: 'Beijing',
          label: '北京'
        }, {
          value: 'Shanghai',
          label: '上海'
        }, {
          value: 'Nanjing',
          label: '南京'
        }, {
          value: 'Chengdu',
          label: '成都'
        }, {
          value: 'Shenzhen',
          label: '深圳'
        }, {
          value: 'Guangzhou',
          label: '广州'
        }],
        value: [],
        value2: ["150000198302198497", "520000198509234351", "220000199306066910"],
        value3: [],
        value4: [],
        value5: [],
        value6: [],
        value7: ["150000198302198497", "520000198509234351", "220000199306066910"],
        value8: ["150000198302198497", "520000198509234351", "220000199306066910"],
        value9: [],
        value10: [],
        value11: [],
        value12: [],
        loading: false,
        states: ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
      };
    },
    
    mounted() {
      this.list = this.states.map(item => { return { value: item, label: item }; });
    },

    methods: {
      remoteMethod(query) {
        if (query !== '') {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            this.options5 = this.list.filter(item => item.label.toLowerCase().indexOf(query.toLowerCase()) > -1);
          }, 1000);
        } else {
          this.options5 = [];
        }
      },
      handleChange(data) {
        console.log(data)
      }
    }
  };
</script>

<style>
  .demo-select .bb-select-picker {
    width: 240px;
  }

  .custom {
    float: right;
    color: rgb(132, 146, 166);
    font-size: 13px;
  }
  .selected .custom {
    color: rgb(226, 231, 236);
  }
</style>

## SelectPicker 下拉多选

用于选项繁多，需要多选且需要展示下拉面板的情景。

### 基础用法

适用广泛的基础多选
:::demo `v-model`的值为当前被选中的`bb-option`的 value 属性值
```html
<template>
  <bb-select-picker
    v-model="value"
    placeholder="请选择"
    @change="handleChange">
    <bb-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </bb-option>
  </bb-select-picker>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
            value: "150000198302198497",
            label: "自己上厕所"
          },
          {
            value: "820000199705024015",
            label: "宝宝认工程车"
          },
          {
            value: "540000199907069628",
            label: "宝宝认蚂蚁"
          },
          {
            value: "220000199306066910",
            label: "猜猜我在哪"
          },
          {
            value: "610000201210180121",
            label: "梦幻泡泡鱼"
          },
          {
            value: "520000198509234351",
            label: "宝宝乘车安全"
          },
          {
            value: "500000200810260897",
            label: "宝宝医院"
          },
          {
            value: "510000201207249059",
            label: "森林动物"
          },
          {
            value: "410000198402093418",
            label: "白天黑夜"
          },
          {
            value: "320000197508128336",
            label: "宝宝童谣"
          },
          {
            value: "36000019980730624X",
            label: "宝宝学蔬菜"
          },
          {
            value: "310000201504155465",
            label: "有趣的对比"
          },
          {
            value: "810000199104264089",
            label: "宝宝爱刷牙"
          },
          {
            value: "310000200707280173",
            label: "宝宝小邮局"
          },
          {
            value: "120000198307166683",
            label: "宝宝宇航员"
          },
          {
            value: "370000200010106862",
            label: "数学农场"
          },
          {
            value: "320000200211305690",
            label: "宝宝节奏大师"
          },
          {
            value: "820000197606126287",
            label: "宝宝美食街"
          },
          {
            value: "210000198711223004",
            label: "形状颜色大小"
          },
          {
            value: "120000201102026622",
            label: "宝宝小船长"
          },
          {
            value: "210000199302076378",
            label: "宝宝出行安全"
          },
          {
            value: "120000198605168062",
            label: "宝宝爱自然"
          },
          {
            value: "320000200706291964",
            label: "宝宝爱整理"
          },
          {
            value: "610000198009047252",
            label: "讲故事之彩虹岛"
          },
          {
            value: "510000197607279047",
            label: "宝宝爱记忆"
          },
          {
            value: "350000198711210407",
            label: "妙妙爱干净"
          },
          {
            value: "81000020160622444X",
            label: "宝宝画彩蛋"
          },
          {
            value: "120000197010261546",
            label: "宝宝拼拼乐"
          },
          {
            value: "820000200510048266",
            label: "宝宝职业大全"
          },
          {
            value: "330000199908114428",
            label: "宝宝点点画"
          }],
        value: []
      }
    },
    methods: {
      handleChange(data) {
        console.log(data)
      }
    }
  }
</script>
```
:::

### 默认值

初始化时设置默认选中项目
:::demo 
```html
<template>
  <bb-select-picker
    v-model="value2"
    placeholder="请选择"
    @change="handleChange">
    <bb-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </bb-option>
  </bb-select-picker>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: "150000198302198497",
          label: "自己上厕所"
        },
        {
          value: "820000199705024015",
          label: "宝宝认工程车"
        },
        {
          value: "540000199907069628",
          label: "宝宝认蚂蚁"
        },
        {
          value: "220000199306066910",
          label: "猜猜我在哪"
        },
        {
          value: "610000201210180121",
          label: "梦幻泡泡鱼"
        },
        {
          value: "520000198509234351",
          label: "宝宝乘车安全"
        },
        {
          value: "500000200810260897",
          label: "宝宝医院"
        },
        {
          value: "510000201207249059",
          label: "森林动物"
        },
        {
          value: "410000198402093418",
          label: "白天黑夜"
        },
        {
          value: "320000197508128336",
          label: "宝宝童谣"
        },
        {
          value: "36000019980730624X",
          label: "宝宝学蔬菜"
        },
        {
          value: "310000201504155465",
          label: "有趣的对比"
        },
        {
          value: "810000199104264089",
          label: "宝宝爱刷牙"
        },
        {
          value: "310000200707280173",
          label: "宝宝小邮局"
        },
        {
          value: "120000198307166683",
          label: "宝宝宇航员"
        },
        {
          value: "370000200010106862",
          label: "数学农场"
        },
        {
          value: "320000200211305690",
          label: "宝宝节奏大师"
        },
        {
          value: "820000197606126287",
          label: "宝宝美食街"
        },
        {
          value: "210000198711223004",
          label: "形状颜色大小"
        },
        {
          value: "120000201102026622",
          label: "宝宝小船长"
        },
        {
          value: "210000199302076378",
          label: "宝宝出行安全"
        },
        {
          value: "120000198605168062",
          label: "宝宝爱自然"
        },
        {
          value: "320000200706291964",
          label: "宝宝爱整理"
        },
        {
          value: "610000198009047252",
          label: "讲故事之彩虹岛"
        },
        {
          value: "510000197607279047",
          label: "宝宝爱记忆"
        },
        {
          value: "350000198711210407",
          label: "妙妙爱干净"
        },
        {
          value: "81000020160622444X",
          label: "宝宝画彩蛋"
        },
        {
          value: "120000197010261546",
          label: "宝宝拼拼乐"
        },
        {
          value: "820000200510048266",
          label: "宝宝职业大全"
        },
        {
          value: "330000199908114428",
          label: "宝宝点点画"
        }],
        value2: ["150000198302198497", "520000198509234351", "220000199306066910"]
      }
    }
  }
</script>
```
:::

### 设置下拉框列数和列宽

可自定义下拉面板选项列数及每列的宽度
:::demo `cols`可设置列数，`col-width`可设置列宽
```html
<template>
  <bb-select-picker
    v-model="value3"
    placeholder="请选择"
    :cols="3"
    :col-width="110"
    @change="handleChange">
    <bb-option
      v-for="item in options2"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </bb-option>
  </bb-select-picker>

  <bb-select-picker
    v-model="value4"
    placeholder="请选择"
    :cols="2"
    :col-width="70"
    style="margin-left: 20px;">
    <bb-option
      v-for="item in options2"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </bb-option>
  </bb-select-picker>
</template>

<script>
  export default {
    data() {
      return {
        options2: [{
          value: "150000198302198497",
          label: "自己上厕所"
        },
        {
          value: "820000199705024015",
          label: "宝宝认工程车"
        },
        {
          value: "540000199907069628",
          label: "宝宝认蚂蚁"
        },
        {
          value: "220000199306066910",
          label: "猜猜我在哪"
        },
        {
          value: "610000201210180121",
          label: "梦幻泡泡鱼"
        },
        {
          value: "520000198509234351",
          label: "宝宝乘车安全"
        },
        {
          value: "500000200810260897",
          label: "宝宝医院"
        },
        {
          value: "510000201207249059",
          label: "森林动物"
        },
        {
          value: "410000198402093418",
          label: "白天黑夜"
        },
        {
          value: "320000197508128336",
          label: "宝宝童谣"
        },
        {
          value: "36000019980730624X",
          label: "宝宝学蔬菜"
        },
        {
          value: "310000201504155465",
          label: "有趣的对比"
        },
        {
          value: "810000199104264089",
          label: "宝宝爱刷牙"
        }],
        value3: [],
        value4: []
      }
    }
  }
</script>
```
:::

### 有禁用选项

:::demo 在`bb-option`中，设定`disabled`值为 true，即可禁用该选项
```html
<template>
  <bb-select-picker v-model="value5" placeholder="请选择">
    <bb-option
      v-for="item in options3"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled">
    </bb-option>
  </bb-select-picker>
</template>

<script>
  export default {
    data() {
      return {
        options3: [{
          value: "150000198302198497",
          label: "自己上厕所"
        },
        {
          value: "820000199705024015",
          label: "宝宝认工程车"
        },
        {
          value: "540000199907069628",
          label: "宝宝认蚂蚁",
          disabled: true
        },
        {
          value: "220000199306066910",
          label: "猜猜我在哪"
        },
        {
          value: "610000201210180121",
          label: "梦幻泡泡鱼"
        },
        {
          value: "520000198509234351",
          label: "宝宝乘车安全"
        },
        {
          value: "500000200810260897",
          label: "宝宝医院"
        },
        {
          value: "510000201207249059",
          label: "森林动物"
        },
        {
          value: "410000198402093418",
          label: "白天黑夜",
          disabled: true
        },
        {
          value: "320000197508128336",
          label: "宝宝童谣"
        },
        {
          value: "36000019980730624X",
          label: "宝宝学蔬菜"
        },
        {
          value: "310000201504155465",
          label: "有趣的对比"
        },
        {
          value: "810000199104264089",
          label: "宝宝爱刷牙"
        }],
        value5: []
      }
    }
  }
</script>
```
:::

### 禁用状态

选择器不可用状态

:::demo 为`bb-select-picker`设置`disabled`属性，则整个选择器不可用
```html
<template>
  <bb-select-picker v-model="value6" disabled placeholder="请选择">
    <bb-option
      v-for="item in options2"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </bb-option>
  </bb-select-picker>
</template>
  
<script>
  export default {
    data() {
      return {
        options2: [{
          value: "150000198302198497",
          label: "自己上厕所"
        },
        {
          value: "820000199705024015",
          label: "宝宝认工程车"
        },
        {
          value: "540000199907069628",
          label: "宝宝认蚂蚁"
        },
        {
          value: "220000199306066910",
          label: "猜猜我在哪"
        },
        {
          value: "610000201210180121",
          label: "梦幻泡泡鱼"
        },
        {
          value: "520000198509234351",
          label: "宝宝乘车安全"
        },
        {
          value: "500000200810260897",
          label: "宝宝医院"
        },
        {
          value: "510000201207249059",
          label: "森林动物"
        }],
        value6: []
      }
    }
  }
</script>
```
:::

### 展开和折叠已选项

`collapse-tags`用于设置选中项在输入框中的显示形式。

:::demo 默认情况下`collapse-tags为true`，选中值会以 折叠的Tag 形式展现，你也可以设置`collapse-tags为false`将它们舒展开来。
```html
<template>
  <bb-select-picker v-model="value7" placeholder="请选择">
    <bb-option
      v-for="item in options2"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </bb-option>
  </bb-select-picker>

  <bb-select-picker
    v-model="value8"
    multiple
    :collapse-tags="false"
    style="margin-left: 20px;"
    placeholder="请选择">
    <bb-option
      v-for="item in options2"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </bb-option>
  </bb-select-picker>
</template>

<script>
  export default {
    data() {
      return {
        options2: [{
          value: "150000198302198497",
          label: "自己上厕所"
        },
        {
          value: "820000199705024015",
          label: "宝宝认工程车"
        },
        {
          value: "540000199907069628",
          label: "宝宝认蚂蚁"
        },
        {
          value: "220000199306066910",
          label: "猜猜我在哪"
        },
        {
          value: "610000201210180121",
          label: "梦幻泡泡鱼"
        },
        {
          value: "520000198509234351",
          label: "宝宝乘车安全"
        },
        {
          value: "500000200810260897",
          label: "宝宝医院"
        },
        {
          value: "510000201207249059",
          label: "森林动物"
        }],
        value7: ["150000198302198497", "520000198509234351", "220000199306066910"],
        value8: ["150000198302198497", "520000198509234351", "220000199306066910"]
      }
    }
  }
</script>
```
:::

### 自定义模板

可以自定义备选项

:::demo 将自定义的 HTML 模板插入`bb-option`的 slot 中即可。
```html
<template>
  <bb-select-picker v-model="value9" placeholder="请选择" :cols="3" :col-width="110">
    <bb-option
      v-for="item in cities"
      :key="item.value"
      :label="item.label"
      :value="item.value">
      <span style="float: left">{{ item.label }}</span>
      <span class="custom">{{ item.value }}</span>
    </bb-option>
  </bb-select-picker>
</template>

<script>
  export default {
    data() {
      return {
        cities: [{
          value: 'Beijing',
          label: '北京'
        }, {
          value: 'Shanghai',
          label: '上海'
        }, {
          value: 'Nanjing',
          label: '南京'
        }, {
          value: 'Chengdu',
          label: '成都'
        }, {
          value: 'Shenzhen',
          label: '深圳'
        }, {
          value: 'Guangzhou',
          label: '广州'
        }],
        value9: []
      }
    }
  }
</script>

<style>
  .custom {
    float: right;
    color: rgb(132, 146, 166);
    font-size: 13px;
  }
  .selected .custom {
    color: rgb(226, 231, 236);
  }
</style>
```
:::

### 分组

备选项进行分组展示

:::demo 使用`bb-option-group`对备选项进行分组，它的`label`属性为分组名
```html
<template>
  <bb-select-picker v-model="value10" placeholder="请选择">
    <bb-option-group
      v-for="group in options4"
      :key="group.label"
      :label="group.label">
      <bb-option
        v-for="item in group.options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </bb-option>
    </bb-option-group>
  </bb-select-picker>
</template>

<script>
  export default {
    data() {
      return {
        options4: [{
          label: '热门城市',
          options: [{
            value: 'Shanghai',
            label: '上海'
          }, {
            value: 'Beijing',
            label: '北京'
          }]
        }, {
          label: '城市名',
          options: [{
            value: 'Chengdu',
            label: '成都'
          }, {
            value: 'Shenzhen',
            label: '深圳'
          }, {
            value: 'Guangzhou',
            label: '广州'
          }, {
            value: 'Dalian',
            label: '大连'
          }]
        }],
        value10: []
      }
    }
  }
</script>
```
:::

### 远程搜索

从服务器搜索数据，输入关键字进行查找
:::demo 为了启用远程搜索，需要将`filterable`和`remote`设置为`true`，同时传入一个`remote-method`。`remote-method`为一个`Function`，它会在输入值发生变化时调用，参数为当前输入值。需要注意的是，如果`bb-option`是通过`v-for`指令渲染出来的，此时需要为`bb-option`添加`key`属性，且其值需具有唯一性，比如此例中的`item.value`。
```html
<template>
  <bb-select-picker
    v-model="value11"
    filterable
    remote
    reserve-keyword
    placeholder="请输入关键词"
    :remote-method="remoteMethod"
    :loading="loading">
    <bb-option
      v-for="item in options5"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </bb-option>
  </bb-select-picker>
</template>

<script>
  export default {
    data() {
      return {
        options5: [],
        value11: [],
        list: [],
        loading: false,
        states: ["Alabama", "Alaska", "Arizona",
        "Arkansas", "California", "Colorado",
        "Connecticut", "Delaware", "Florida",
        "Georgia", "Hawaii", "Idaho", "Illinois",
        "Indiana", "Iowa", "Kansas", "Kentucky",
        "Louisiana", "Maine", "Maryland",
        "Massachusetts", "Michigan", "Minnesota",
        "Mississippi", "Missouri", "Montana",
        "Nebraska", "Nevada", "New Hampshire",
        "New Jersey", "New Mexico", "New York",
        "North Carolina", "North Dakota", "Ohio",
        "Oklahoma", "Oregon", "Pennsylvania",
        "Rhode Island", "South Carolina",
        "South Dakota", "Tennessee", "Texas",
        "Utah", "Vermont", "Virginia",
        "Washington", "West Virginia", "Wisconsin",
        "Wyoming"]
      }
    },
    mounted() {
      this.list = this.states.map(item => {
        return { value: item, label: item };
      });
    },
    methods: {
      remoteMethod(query) {
        if (query !== '') {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            this.options4 = this.list.filter(item => {
              return item.label.toLowerCase()
                .indexOf(query.toLowerCase()) > -1;
            });
          }, 200);
        } else {
          this.options5 = [];
        }
      }
    }
  }
</script>
```
:::

### 创建条目
可以创建并选中选项中不存在的条目
:::demo 使用`allow-create`属性即可通过在输入框中输入文字来创建新的条目。注意此时`filterable`必须为真。本例还使用了`default-first-option`属性，在该属性打开的情况下，按下回车就可以选中当前选项列表中的第一个选项，无需使用鼠标或键盘方向键进行定位。
```html
<template>
  <bb-select-picker
    v-model="value12"
    filterable
    allow-create
    default-first-option
    placeholder="请选择文章标签"
    @change="handleChange">
    <bb-option
      v-for="item in options6"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </bb-option>
  </bb-select-picker>
</template>

<script>
  export default {
    data() {
      return {
        options6: [{
          value: 'HTML',
          label: 'HTML'
        }, {
          value: 'CSS',
          label: 'CSS'
        }, {
          value: 'JavaScript',
          label: 'JavaScript'
        }],
        value12: []
      }
    }
  }
</script>
```
:::

:::tip
远程搜索和创建条目需要在bb-select-picker输入框中操作，而不是下拉面板中的输入框
:::

### Select Attributes 
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| v-model | 与选择器绑定的value | array | — | — |
| disabled | 是否禁用 | boolean | — | false |
| cols | 下拉面板选项列数 | number | — | 4 |
| col-width | 下拉面板列宽 | number | — | 90 |
| size | 输入框尺寸 | string | large/small/mini | — |
| collapse-tags | 多选时是否将选中值按文字的形式展示 | boolean | — | true |
| multiple-limit | 多选时用户最多可以选择的项目数，为 0 则不限制 | number | — | 0 |
| name | select input 的 name 属性 | string | — | — |
| placeholder | 占位符 | string | — | 请选择 |
| filterable | 搜索功能移动到下拉面板，这个属性用于远程搜索和创建条目 | boolean | — | false |
| allow-create | 是否允许用户创建新条目，需配合 `filterable` 使用 | boolean | — | false |
| filter-method | 自定义搜索方法 | function | — | — |
| remote | 是否为远程搜索 | boolean | — | false |
| remote-method | 远程搜索方法 | function | — | — |
| loading | 是否正在从远程获取数据 | boolean | — | false |
| loading-text | 远程加载时显示的文字 | string | — | 加载中 |
| no-match-text | 搜索条件无匹配时显示的文字 | string | — | 无匹配数据 |
| no-data-text | 选项为空时显示的文字 | string | — | 无数据 |
| popper-class | Select 下拉框的类名 | string | — | — |
| reserve-keyword | 多选且可搜索时，是否在选中一个选项后保留当前的搜索关键词 | boolean | — | false |
| default-first-option | 在输入框按下回车，选择第一个匹配项。需配合 `filterable` 或 `remote` 使用 | boolean | - | false |

### Select Events
| 事件名称 | 说明 | 回调参数 |
|---------|---------|---------|
| change | 选中值发生变化时触发 | 目前的选中值 |
| visible-change | 下拉框出现/隐藏时触发 | 出现则为 true，隐藏则为 false |
| remove-tag | 多选模式下移除tag时触发 | 移除的tag值 |
| select-all | 全选按钮点击时触发 | 选中的值 |
| clear | 清空按钮点击时触发 | — |
| blur | 当 input 失去焦点时触发 | (event: Event) |
| focus | 当 input 获得焦点时触发 | (event: Event) |

### Option Group Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| label | 分组的组名 | string | — | — |
| disabled | 是否将该分组下所有选项置为禁用 | boolean | — | false |

### Option Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | 选项的值 | string/number/object | — | — |
| label | 选项的标签，若不设置则默认与 `value` 相同 | string/number | — | — |
| disabled | 是否禁用该选项 | boolean | — | false |

### Methods
| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| focus | 使 input 获取焦点 | - |
