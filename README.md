## 工具使用

### 打包工具
1. [rollup JavaScript 打包器](https://rollupjs.org/)

### 兼容方案
1. ES6 语法兼容:
   1. 配置转换工具Babel，依赖的插件[rollup-plugin-babel](https://github.com/rollup/plugins/tree/master/packages/babel#readme)、[@babel/core](https://babel.dev/docs/babel-core)、[@babel/preset-env](https://babel.dev/docs/babel-preset-env) 
2. ES6 API兼容：
    1. [core-js ES6+的polyfill库](https://github.com/zloirock/core-js#readme)
    2. core-js Babel插件，项目依赖的ES6语法编译成ES5：[@babel/plugin-transform-runtime](https://babel.dev/docs/babel-plugin-transform-runtime)、[@babel/runtime-corejs2](https://babel.dev/docs/babel-runtime-corejs2)


## 单元测试

### 测试用例
#### 设计思路
对于函数的测试，可以按照函数的参数分组，每个参数一组，在对于一个参数进行测试时，保证其他参数没有影响。

#### 测试用例编写
| 分组   | 正确的测试用例      | 错误的测试用例 | 边界值测试用例            |
|------|--------------|---------|--------------------|
| data | 基本数据类型：对象、数组 | 无       | 空参数、underfind、null |

### 单元测试库Mocha

#### 常用的函数
* describe()：定义一个测试套件。
* it()：定义一个测试用例。
* before()：在测试套件中所有测试用例执行之前执行一次。
* after()：在测试套件中所有测试用例执行之后执行一次。
* beforeEach()：在测试套件中每个测试用例执行之前都会执行一次。
* afterEach()：在测试套件中每个测试用例执行之后都会执行一次。
* setup()：在测试套件中所有测试用例执行之前执行一次，与before()类似。
* teardown()：在测试套件中所有测试用例执行之后执行一次，与after()类似。
* suiteSetup()：在测试套件中所有测试用例执行之前执行一次，与before()类似。
* suiteTeardown()：在测试套件中所有测试用例执行之后执行一次，与after()类