<script>
  import ModalGroup from './vue/modal-message.vue';
  import ModalDemand from './vue/modal-demand.vue';
  export default {
    data() {
      return {
        showModal: false,
        showModal2: false,
        importModal2: false
      };
    },

    computed: {
    },

    components: {
      ModalGroup,
      ModalDemand
    },

    methods: {
      handleShowModal() {
        this.importModal2 = true;
        this.showModal2 = true;
      }
    }
  }
</script>
<style>
</style>

## Dialog 对话框 常用示例

将项目中Dialog 对话框常用示例进行展示    
:::tip
本部分代码不支持`JSFiddle`在线运行
:::

### 独立成单文件组件

:::demo `父组件`
```html
<el-button type="text" @click="showModal = true">点击打开 Dialog</el-button>

<modal-group v-model="showModal"></modal-group>

<script>
  import ModalGroup from './vue/modal-message.vue';
  export default {
    data() {
      return {
        showModal: false,
      };
    },

    components: {
      ModalGroup
    }
  }
</script>
```

`子组件`
```html
<template>
  <el-dialog
    title="提示"
    :visible.sync="show"
    width="30%">
    <span>这是一段信息</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="show = false">取 消</el-button>
      <el-button type="primary" @click="ok">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
  export default {
    name: 'ModalGroup',

    props: {
      value: {
        type: Boolean,
        default: false
      }
    },

    data() {
      return {
      };
    },

    computed: {
      show: {
        // getter
        get() {
          return this.value;
        },
        // setter
        set(newValue) {
          this.$emit('input', newValue);
        }
      }
    },

    methods: {
      ok() {
        this.show = false;
        console.log('ok');
      }
    }
  };
</script>
```
:::

### 按需加载

:::tip
下面的例子在`vue-cli`中可以使用，这边可能是因为`cooking`不支持`webpack code-splitting`或`babel`版本不支持ES7，导致`components: {
  ModalDemand: () => import('./vue/modal-demand.vue')
},`语法错误
:::

:::demo `父组件`
```html
<el-button type="text" @click="handleShowModal">点击打开 Dialog</el-button>

<modal-demand v-if="importModal2" v-model="showModal2"></modal-demand>

<script>
  export default {
    data() {
      return {
        importModal2: false,
        showModal2: false
      };
    },

    components: {
      ModalDemand: () => import('./vue/modal-demand.vue')
    },

    methods: {
      handleShowModal() {
        this.importModal2 = true;
        this.showModal2 = true;
      }
    }
  }
</script>
```

`子组件`
```html
<template>
  <el-dialog
    title="提示"
    :visible.sync="show"
    width="30%">
    <span>按需加载</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="show = false">取 消</el-button>
      <el-button type="primary" @click="ok">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
  export default {
    name: 'ModalGroup',

    props: {
      value: {
        type: Boolean,
        default: false
      }
    },

    data() {
      return {
      };
    },

    computed: {
      show: {
        // getter
        get() {
          return this.value;
        },
        // setter
        set(newValue) {
          this.$emit('input', newValue);
        }
      }
    },

    methods: {
      ok() {
        this.show = false;
        console.log('ok');
      }
    }
  };
</script>
```

:::
