<template>
  <li
    @mouseenter="hoverItem"
    @click.stop="selectOptionClick"
    class="el-select-dropdown__item"
    :style="{ width: width - 4 + 'px' }"
    v-show="visible"
    :class="{
      'selected': itemSelected,
      'is-disabled': disabled || groupDisabled || limitReached,
      'hover': hover
    }">
    <slot>
      <span>{{ currentLabel }}</span>
    </slot>
  </li>
</template>

<script type="text/babel">
  import Emitter from 'element-ui/lib/mixins/emitter';
  import { getValueByPath } from 'element-ui/lib/utils/util';

  export default {
    mixins: [Emitter],

    name: 'BbOption',

    componentName: 'BbOption',

    inject: ['bb-select-picker'],

    props: {
      value: {
        required: true
      },
      label: [String, Number],
      created: Boolean,
      disabled: {
        type: Boolean,
        default: false
      }
    },

    data() {
      return {
        index: -1,
        groupDisabled: false,
        visible: true,
        hitState: false,
        hover: false,
        width: this['bb-select-picker'].colWidth
      };
    },

    computed: {
      isObject() {
        return Object.prototype.toString.call(this.value).toLowerCase() === '[object object]';
      },

      currentLabel() {
        return this.label || (this.isObject ? '' : this.value);
      },

      currentValue() {
        return this.value || this.label || '';
      },

      itemSelected() {
        if (!this['bb-select-picker'].multiple) {
          return this.isEqual(this.value, this['bb-select-picker'].value);
        } else {
          return this.contains(this['bb-select-picker'].value, this.value);
        }
      },

      limitReached() {
        if (this['bb-select-picker'].multiple) {
          return !this.itemSelected &&
            (this['bb-select-picker'].value || []).length >= this['bb-select-picker'].multipleLimit &&
            this['bb-select-picker'].multipleLimit > 0;
        } else {
          return false;
        }
      }
    },

    watch: {
      currentLabel() {
        if (!this.created && !this['bb-select-picker'].remote) this.dispatch('BbSelectPicker', 'setSelected');
      },
      value() {
        if (!this.created && !this['bb-select-picker'].remote) this.dispatch('BbSelectPicker', 'setSelected');
      }
    },

    methods: {
      isEqual(a, b) {
        if (!this.isObject) {
          return a === b;
        } else {
          const valueKey = this['bb-select-picker'].valueKey;
          return getValueByPath(a, valueKey) === getValueByPath(b, valueKey);
        }
      },

      contains(arr = [], target) {
        if (!this.isObject) {
          return arr.indexOf(target) > -1;
        } else {
          const valueKey = this['bb-select-picker'].valueKey;
          return arr.some(item => {
            return getValueByPath(item, valueKey) === getValueByPath(target, valueKey);
          });
        }
      },

      handleGroupDisabled(val) {
        this.groupDisabled = val;
      },

      hoverItem() {
        if (!this.disabled && !this.groupDisabled) {
          this['bb-select-picker'].hoverIndex = this['bb-select-picker'].options.indexOf(this);
        }
      },

      selectOptionClick() {
        if (this.disabled !== true && this.groupDisabled !== true) {
          this.dispatch('BbSelectPicker', 'handleOptionClick', this);
        }
      },

      queryChange(query) {
        // query 里如果有正则中的特殊字符，需要先将这些字符转义
        let parsedQuery = String(query).replace(/(\^|\(|\)|\[|\]|\$|\*|\+|\.|\?|\\|\{|\}|\|)/g, '\\$1');
        this.visible = new RegExp(parsedQuery, 'i').test(this.currentLabel) || this.created;
        if (!this.visible) {
          this['bb-select-picker'].filteredOptionsCount--;
        }
      }
    },

    created() {
      this['bb-select-picker'].options.push(this);
      this['bb-select-picker'].cachedOptions.push(this);
      this['bb-select-picker'].optionsCount++;
      this['bb-select-picker'].filteredOptionsCount++;

      this.$on('queryChange', this.queryChange);
      this.$on('handleGroupDisabled', this.handleGroupDisabled);
    },

    beforeDestroy() {
      this['bb-select-picker'].onOptionDestroy(this['bb-select-picker'].options.indexOf(this));
    }
  };
</script>
