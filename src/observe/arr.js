const methods = [
  'push',
  'unshift',
  'slice'
];

const oldPrototype = Array.prototype;

export const newPrototype = {};

methods.forEach((item) => {
  newPrototype[item] = function(...args) {
    console.log('数组劫持', this, args);
    let insert = null;

    // 新增内容值的时候，新增的值也要添加响应式
    switch (item) {
      case 'push':
      case 'unshift':
        insert = args;
        break;
      
      case 'slice':
        insert = [args[2]]
      default:
        break;
    }

    this.__ob__.defineArray(insert);
    const result = oldPrototype[item].apply(this, args);
    return result;
  }
})