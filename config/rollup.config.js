const common = require("./rollup")
module.exports = {
    input: "src/index.js",
    output: {
        file: "dist/index.js",
        format: "cjs",
        banner: common.common
    }
}