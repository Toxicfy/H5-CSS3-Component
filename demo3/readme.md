主要使用的是
- 通过JS改变元素的height，然后加上transition来让css动起来。
- `document.querySelectorAll`获取节点，`Array.from`转换为数组;
- `Object.assign` 来把后面的对象上面的属性拷贝到第一个参数对象上面去；