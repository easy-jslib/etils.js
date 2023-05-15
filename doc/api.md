# 文档

这是一个 javascript 常用工具方法库

## clone

实现数据的深拷贝

- param {any} data 待拷贝的数据
- return {any) 拷贝成功的数据

代码示例

```javascript
import { clone } from 'etils.js';
const data = [1, 2, 3];
const cloneData = clone(data);
```

## getUrlParam

实现浏览器地址参数的获取

- param {string} key 需要截取的参数 key 值
- return {string} 获取的参数

代码示例

```javascript
import { getUrlParam } from 'etils.js';
const url = 'https://www.hddata.cn?token=123456&name=dengnanhao';
const token = getUrlParam('token');
// 123456
const token = getUrlParam('name');
// dengnanhao
```
