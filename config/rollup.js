const pkg = require("../package.json")
const version = pkg.version
const banner = `*!
*${pkg.name} ${version}
*Licensed under MIT
*/
`
exports.banner = banner