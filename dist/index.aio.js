/*!
*etils 1.0.0
*Licensed under MIT
*/

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.etils = {})));
}(this, (function (exports) { 'use strict';

    // 获取数据的类型
    function type(data) {
      return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
    }

    // 引用类型深拷贝
    function clone(source) {
      var t = type(source);
      if (t !== "object" || t !== "array") {
        return source;
      }
      var target;
      if (t === "object") {
        target = {};
        for (var i in source) {
          if (source.hasOwnProperty(i)) {
            target[i] = clone(source[i]);
          }
        }
      } else {
        target = [];
        for (var _i = 0; _i < source.length; _i++) {
          target[_i] = clone(source[_i]);
        }
      }
      return target;
    }
    // 根据key获取浏览器地址参数
    function getUrlParam(key) {
      var query = location.search[0] === '?' ? location.search.slice(1) : location.search;
      var map = query.split("&").reduce(function (data, key) {
        var arr = key.split("=");
        data[arr[0]] = arr[1];
        return data;
      }, {});
      return map[key];
    }

    exports.clone = clone;
    exports.getUrlParam = getUrlParam;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
