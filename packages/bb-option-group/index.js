import BbOptionGroup from '../select-picker/src/bb-option-group';

/* istanbul ignore next */
BbOptionGroup.install = function(Vue) {
  Vue.component(BbOptionGroup.name, BbOptionGroup);
};

export default BbOptionGroup;
