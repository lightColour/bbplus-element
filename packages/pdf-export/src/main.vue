<template>
  <div class="el-pdf-export">
    <slot></slot>
  </div>
</template>

<script>
import JsPDF from 'jspdf';
export default {
  name: 'BbPdfExport',

  componentName: 'BbPdfExport',

  props: {
    element: {
      required: true
    },
    name: {
      type: String,
      default: Date.now() + '.pdf'
    },
    background: {
      type: String,
      default: '#fff'
    }
  },

  methods: {
    /**
     * 导出为PDF
     * @param  {Object} config el: 需截图的元素, name: 文件名, background: 背景颜色
     * @return {[type]}        [description]
     *
     * html2canvas.js 超出可视区域截图是空白的、分辨率优化、文字模糊问题, 采用下面的pr对源码进行修改
     *
     * https://github.com/niklasvh/html2canvas/commit/62b6973b5a4ba7376367bb090424066a374abe9e
     * https://github.com/niklasvh/html2canvas/issues/541
     * https://github.com/niklasvh/html2canvas/issues/576
     * https://github.com/niklasvh/html2canvas/pull/1087
     *
     * 修改的代码：源码搜索(change start、change end包裹的代码, 注释掉的为源代码, 没注释掉的是修改后的代码)
     *
     */
    exportToPDF() {
      const html2canvas = require('./html2canvas');

      // const el = document.body;
      const el = this.element();
      el.parentNode.scrollTop = 0;
      const vue = this;

      html2canvas(el, {
        onrendered(canvas) {
          document.body.appendChild(canvas);
          const contentWidth = canvas.width;
          const contentHeight = canvas.height;

          const pageData = canvas.toDataURL('image/jpeg', 1.0);
          const pdf = new JsPDF(contentWidth > contentHeight ? 'l' : 'p', 'pt', [contentHeight, contentWidth]);
          pdf.addImage(pageData, 'JPEG', 0, 0, contentWidth, contentHeight, undefined, 'SLOW');
          pdf.save(vue.name);
        },
        background: this.background
      });
    }
  }
};
</script>
