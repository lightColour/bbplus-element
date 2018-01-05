import BbOption from '../select-picker/src/bb-option';

/* istanbul ignore next */
BbOption.install = function(Vue) {
  Vue.component(BbOption.name, BbOption);
};

export default BbOption;
