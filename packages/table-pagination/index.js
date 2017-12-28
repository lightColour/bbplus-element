import TablePagination from './src/main';

/* istanbul ignore next */
TablePagination.install = function(Vue) {
  Vue.component(TablePagination.name, TablePagination);
};

export default TablePagination;
