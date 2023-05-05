import { initState } from './initState';

function Vue(options) {
  console.log(this);
  // 初始化
  this._init(options);
};

Vue.prototype._init = function(options) {
  console.log(this);
  let vm = this;
  vm.$options = options;
  initState(vm);
};

export default Vue;