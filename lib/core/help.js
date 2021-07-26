//commander , 插件（在npm上下载），用来创建命令
const program = require('commander')

const helpDemo = () => {
    program.version(require("../../package.json").version)
    program.option('-d --dest <dest>', 'a destination folder  例如：./src/home');
    program.option('-w --who', 'bigcat');
    program.on('--help', function () {
        console.log("Other:")
        console.log("  other options")
    })
}

module.exports = helpDemo