<template>
  <div
    class="el-select-dropdown el-popper"
    :class="[{ 'is-multiple': $parent.multiple }, popperClass]"
    :style="{ width: minWidth }">
    <div
      class="el-select-dropdown__search"
      :style="{ 'padding-right': $parent.colWidth + 37 + 'px' }">
      <el-input class="el-select-dropdown__input" v-model="query" size="small" placeholder="请输入内容"></el-input>
    </div>
    <slot></slot>
  </div>
</template>

<script type="text/babel">
  import Popper from 'bbplus-element/src/utils/vue-popper';
  import Emitter from 'bbplus-element/src/mixins/emitter';

  export default {
    name: 'ElSelectDropdown',

    componentName: 'ElSelectDropdown',

    mixins: [Popper, Emitter],

    props: {
      placement: {
        default: 'bottom-start'
      },

      boundariesPadding: {
        default: 0
      },

      popperOptions: {
        default() {
          return {
            gpuAcceleration: false
          };
        }
      },

      visibleArrow: {
        default: true
      }
    },

    data() {
      return {
        minWidth: '',
        query: '',
        previousQuery: ''
      };
    },

    computed: {
      popperClass() {
        return this.$parent.popperClass;
      }
    },

    watch: {
      '$parent.inputWidth'() {
        this.minWidth = this.$parent.colWidth * (this.$parent.cols + 1) + 44 + 'px';
        // this.minWidth = this.$parent.$el.getBoundingClientRect().width + 'px';
      },

      query(val) {
        this.$parent.handleQueryChange(val);
      }
    },

    mounted() {
      this.referenceElm = this.$parent.$refs.reference.$el;
      this.$parent.popperElm = this.popperElm = this.$el;
      this.$on('updatePopper', () => {
        if (this.$parent.visible) this.updatePopper();
      });
      this.$on('destroyPopper', this.destroyPopper);
    }
  };
</script>
