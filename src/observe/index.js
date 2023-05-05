import { newPrototype } from "./arr";

export function observe(data) {
  if (typeof data !== 'object') {
    return data;
  }

  return new Observer(data)
};

class Observer {
  constructor(data) {
    // 将 this 传到 data 中
    Object.defineProperty(data, '__ob__', {
      enumerable: false,
      value: this,
    });

    // 如果是数组则要另外方法劫持，因为会将数组的下标作为键值
    if (Array.isArray(data)) {
      console.log('数组', data);
      data.__proto__ = newPrototype;
      this.defineArray(data);
    } else {
      this.walk(data);
    }
  }

  // 循环data里面的内容，给他添加get和set属性
  walk(data) {
    const keys = Object.keys(data);
    for (const keyItem of keys) {
      const value = data[keyItem];
      defineReactive(data, keyItem, value);
    }
  }

  defineArray(value) {
    console.log(11, Array.isArray(value));
    for (const item of value) {
      observe(item)
    }
  }
}

function defineReactive(data, key, value) {
  observe(value)
  Object.defineProperty(data, key, {
    get() {
      console.log('=== 读取数据 ===');
      return value;
    },
    set(newValue) {
      console.log('=== 设置数据 ===');
      if (newValue === value) {
        return false;
      } else {
        observe(newValue)
        value = newValue;
      }
    }
  });
}