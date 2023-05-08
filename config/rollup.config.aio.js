const nodeResolve = require("rollup-plugin-node-resolve")
module.exports = {
    input: "src/index.js",
    output: {
        file: "dist/index.aio.js",
        format: "umd",
        name: "etils"
    },
    plugins: [
        nodeResolve({
            main: true
        })
    ]
}