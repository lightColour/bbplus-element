import SelectPicker from './src/select-picker';

/* istanbul ignore next */
SelectPicker.install = function(Vue) {
  Vue.component(SelectPicker.name, SelectPicker);
};

export default SelectPicker;
