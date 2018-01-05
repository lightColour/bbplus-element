import PdfExport from './src/main';

/* istanbul ignore next */
PdfExport.install = function(Vue) {
  Vue.component(PdfExport.name, PdfExport);
};

export default PdfExport;
