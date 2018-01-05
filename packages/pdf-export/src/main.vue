<template>
  <div class="el-pdf-export">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BbPdfExport',

  componentName: 'BbPdfExport',

  props: {
    element: {
      required: true
    },
    name: {
      type: String,
      default: Date.now() + ''
    },
    background: {
      type: String,
      default: '#fff'
    }
  },

  methods: {
    exportToPDF() {
      const html2canvas = require('./html2canvas');
      const jsPDF = require('./jsPdf.debug');

      const el = this.element();

    	html2canvas(el, {
        onrendered(canvas) {
          el.appendChild(canvas);
          const contentWidth = canvas.width;
          const contentHeight = canvas.height;

          const pageData = canvas.toDataURL('image/jpeg', 1.0);
          const pdf = new jsPDF(contentWidth > contentHeight ? 'l' : 'p', 'pt', [contentHeight, contentWidth]);
          pdf.addImage(pageData, 'JPEG', 0, 0, contentWidth, contentHeight, 'SLOW');
          pdf.save(this.name);
        },
        background: this.background
    	})
    }
  },

  mounted() {
  	console.log(this.element);
  }
};
</script>
