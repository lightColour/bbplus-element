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
