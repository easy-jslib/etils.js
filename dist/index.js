'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// 获取数据的类型
function type(data) {
    return Object.prototype.toString.call(data).slice(8, -1).toLowerCase()
}

// 引用类型深拷贝
function clone(source) {
    const t = type(source);
    if (t !== "object" || t !== "array") {
        return source
    }
    let target;

    if (t === "object") {
        target = {};
        for (let i in source) {
            if (source.hasOwnProperty(i)) {
                target[i] = clone(source[i]);
            }
        }
    } else {
        target = [];
        for (let i = 0; i < source.length; i++) {
            target[i] = clone(source[i]);
        }
    }
    return target
}

exports.type = type;
exports.clone = clone;
