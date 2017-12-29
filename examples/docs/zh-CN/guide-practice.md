## 踩坑指南

### 方案选择
方案一
`bbplus组件包含element组件`
```shell
import BbplusElement from 'bbplus-element'
```

方案二
`bbplus组件与element组件相互独立`
```shell
import ElementUI from 'element-ui'
import BbplusElement from 'bbplus-element'
```

#### 方案一
一开始，我采用的是方案一，在 element-ui 的基础上，创建 bb-packages 目录，我们的组件就放在这个目录里，通过修改cookie配置，打包时，与packages合并到lib下。
这种方案的好处是，可以很轻易的通过下面的指令和github上的源项目进行同步。
```shell
git remote add upstream [url]
git fetch upstream
```
然而，在发包到npm仓库的时候遇到了麻烦。<br>
我的做法是，修改package.json中的name为bbplus-element, 然后`npm publish`到npm仓库。[在使用淘宝镜像的情况下，怎么登录npm的账号？](https://segmentfault.com/q/1010000004105128)
通过`npm i bbplus-element -S`安装到项目本地后，我们是通过`import BbplusElementUI from 'bbplus-element'`引入模块的。
但是，bbplus-element包内的模块引入是有问题的。
查看element项目代码发现
```shell
// build/config.js
'bbplus-element': path.resolve(__dirname, '../')

// packages/下的组件模块引入
import Emitter from 'element-ui/src/mixins/emitter';

// 打包后lib下的组件引入模块都会带上"element-ui"
module.exports = require("element-ui/lib/mixins/emitter");
```
这就导致我们的包名"bbplus-element"与路径"element-ui"不一致，无法加载到模块。
怎么解决这个问题？<br>
* 在`npm pushlish`之前，对项目lib下的"element-ui"批量替换成"bbplus-element"
* 对整个项目中的"element-ui"替换成"bbplus-element",然后再`npm run dist`和`npm pushlish`
以上两种方法都很容易出错，第二种方法在和github源element同步时，更是会有冲突，因此，我转向了方案二。


#### 方案二
方案二需要对element原组件进行清空，并将所有"element-ui"替换成"bbplus-element"，以及安装依赖`npm i element-ui -S`。
<br>然后修改项目示例examples/entry.js下的代码
```shell
// import Element from 'main/index.js';
// import 'packages/theme-chalk/src/index.scss';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import BbplusElement from 'main/index.js';
import 'packages/theme-chalk/src/index.scss';

...

Vue.use(Element);
Vue.use(BbplusElement);
```
修改package.json
```shell
"peerDependencies": {
  "element-ui": "^2.0.9",
  "vue": "^2.5.2"
}
```
方案二相比方案一解决了npm发包的路径问题，但在同步github上element源库时，没方案一便捷。
