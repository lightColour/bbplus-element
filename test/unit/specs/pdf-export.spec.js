import { createTest, destroyVM } from '../util';
import PdfExport from 'packages/pdf-export';

describe('PdfExport', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(PdfExport, true);
    expect(vm.$el).to.exist;
  });
});

