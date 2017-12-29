## 安装

### npm 安装
推荐使用 npm 的方式安装，它能更好地和 [webpack](https://webpack.js.org/) 打包工具配合使用。

```shell
npm i bbplus-element -S
```

### 引入 bbplus-element

你可以引入整个 bbplus-element，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 bbplus-element。

#### 完整引入

在 main.js 中写入以下内容：
```javascript
import Vue from 'vue'
// element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// bbplus-element
import BbplusElementUI from 'bbplus-element'
import 'bbplus-element/lib/theme-chalk/index.css'
import App from './App.vue'

Vue.use(ElementUI)
Vue.use(BbplusElementUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
```
以上代码便完成了 bbplus-element 的引入。需要注意的是，样式文件需要单独引入。

#### 按需引入

借助 [babel-plugin-component](https://github.com/QingWei-Li/babel-plugin-component)，我们可以只引入需要的组件，以达到减小项目体积的目的。

首先，安装 babel-plugin-component：

```bash
npm install babel-plugin-component -D
```

然后，将 .babelrc 修改为：
```json
{
  "presets": [
    ["env", {
      "modules": false
    }],
    "stage-2"
  ],
  "plugins": [["component", [
    {
      "libraryName": "element-ui",
      "styleLibraryName": "theme-chalk"
    },
    {
      "libraryName": "bbplus-element",
      "styleLibraryName": "theme-chalk"
    }
  ]]]
}
```

接下来，如果你只希望引入部分组件，比如 SelectDatePicker 和 TablePagination，那么需要在 main.js 中写入以下内容：

```javascript
import Vue from 'vue'
import { Button, Select } from 'element-ui'
import { SelectDatePicker, TablePagination } from 'bbplus-element'
import App from './App.vue'

Vue.use(Button)
Vue.use(Select)
Vue.use(SelectDatePicker)
Vue.use(TablePagination)

new Vue({
  el: '#app',
  render: h => h(App)
})
```

完整组件列表和引入方式（完整组件列表以 [components.json](http://git.babybus.com/liuzhaozhi/bb-element/blob/master/components.json) 为准）

```javascript
import Vue from 'vue'
import {
  SelectDatePicker,
  TablePagination
} from 'bbplus-element'

Vue.use(SelectDatePicker)
Vue.use(TablePagination)
