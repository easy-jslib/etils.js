const pkg = require("../package.json")
const babel = require("rollup-plugin-babel");
const commonjs = require("rollup-plugin-commonjs")
const version = pkg.version

const banner = `/*!
*${pkg.name} ${version}
*Licensed under MIT
*/
`
exports.banner = banner

// 将ES6的语法编译为ES5的语法
function compilerGrammar(opt) {
    return babel({
        babelrc: false,
        presets: [
            [
                "@babel/preset-env",
                {
                    targets: {
                        browsers: "last 2 versions, > 1%, ie >= 8, Chrome >= 45, safari >= 10",
                        node: "0.12"
                    },
                    modules: false,
                    loose: true
                }
            ]
        ],
        exclude: "node_modules/**"
    })
}

exports.compilerGrammar = compilerGrammar

// 将ES6的api编译成ES5的api
function compilerApi() {
    return [
        '@babel/plugin-transform-runtime',
        {
            corejs: 3
        }
    ]
}

exports.compilerApi = compilerApi

// 导出公共插件
exports.plugins = function () {
    return [
        commonjs({
            exclude: "node_modules/**"
        }),
        compilerGrammar(),
        compilerApi()
    ]
}