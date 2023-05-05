import { observe } from './observe/index';

export function initState(vm) {
  const opts = vm.$options;
  if (opts.el) {

  }

  if (opts.data) {
    initData(vm);
  }
};

function initData(vm) {
  let data = vm.$options.data;
  // data 有可能是函数，也有可能是 对象，所以要做判断
  data = vm.data = typeof data === 'function' ? data() : data;

  // 开始进行数据劫持
  observe(data);
};
