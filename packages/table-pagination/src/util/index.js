/**
 * 用于下方的表格排序
 * @author Alexee
 * @date   2017-09-11
 */
const isObject = function(obj) {
  return obj !== null && typeof obj === 'object';
};

const isString = function(value) {
  return typeof value === 'string';
};

const getValueByPath = function(object, prop) {
  prop = prop || '';
  const paths = prop.split('.');
  let current = object;
  let result = null;
  for (let i = 0, j = paths.length; i < j; i++) {
    const path = paths[i];
    if (!current) break;

    if (i === j - 1) {
      result = current[path];
      break;
    }
    current = current[path];
  }
  return result;
};

/**
 * 表格排序
 * @author Alexee
 * @date   2017-09-11
 * @param  {[type]}   array      [数组: data]
 * @param  {[type]}   sortKey    [排序属性: states.sortProp]
 * @param  {[type]}   reverse    [排序类型(升序，降序): states.sortOrder]
 * @param  {[type]}   sortMethod [自定义排序方法: sortingColumn.sortMethod]
 * @return {[type]}   array      [数组: data copy]
 */
export const orderBy = function(array, sortKey, reverse, sortMethod) {
  if (typeof reverse === 'string') {
    reverse = reverse === 'descending' ? -1 : 1;
  }
  if (!sortKey) {
    return array;
  }
  const order = (reverse && reverse < 0) ? -1 : 1;

  // sort on a copy to avoid mutating original array
  return array.slice().sort(sortMethod ? function(a, b) {
    return sortMethod(a, b) ? order : -order;
  } : function(a, b) {
    if (sortKey !== '$key') {
      if (isObject(a) && '$value' in a) a = a.$value;
      if (isObject(b) && '$value' in b) b = b.$value;
    }

    a = isObject(a) ? getValueByPath(a, sortKey) : a;
    b = isObject(b) ? getValueByPath(b, sortKey) : b;

    // 处理百分比数据
    if (isString(a) && (a.indexOf('%') !== -1)) {
      a = Number(a.replace('%', ''));
      b = Number(b.replace('%', ''));
    }

    return a === b ? 0 : a > b ? order : -order;
  });
};
