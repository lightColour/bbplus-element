## 本地环境搭建

#### 首先你需要 Node.js 4+ 和 NPM 3+

```shell
git clone http://git.babybus.com/liuzhaozhi/bb-element.git
npm run dev

# open http://localhost:8085
```

#### 如果国内用户觉得安装慢可以使用 yarn 搭配 taobao registry

```shell
npm i yarn -g
yarn config set registry https://registry.npm.taobao.org
yarn
npm run dev

# open http://localhost:8085
```

#### To build:

```shell
npm run dist
```

### 组件开发规范
| 目录 | 说明 |
|---------- |-------- |
| packages | 团队组件存放目录 |
| packages/theme-chalk/src | 团队组件样式目录 |
| src/utils | 团队工具函数存放目录 |
| examples/docs/zh-CN | 组件文档、实例目录 |

### 组件开发流程

#### 1. 参考组件开发规范，在相应的目录下编写组件代码(可通过`npm run add`创建组件目录结构, 详见下面的tip)
#### 2. 编写组件说明文档、示例
#### 3. 在components.json中添加组件名和路径
#### 4. src/index.js中引用组件
#### 5. 在examples/nav.config.json中添加路由
#### 6. 运行 npm run dist --打包项目代码
#### 7. 运行 npm run deploy --生成项目文档(注：这里运行结束后会报错 "系统找不到指定的路径"， 是正常的)
#### 8. 合并项目到master分支，推送到git上

:::tip
npm run add select-picker 下拉多选
两个参数 组件名、中文组件名

生成 packages/select-picker 
生成 components.json
修改 examples/nav.config.json 中的组件目录
生成 examples/docs/zh-CN/select-picker.md 组件文档和示例文件
注： 这里src/index.js没修改, 开发环境下, 需要手动引入组件
:::
