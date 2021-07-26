const vueRepo = 'direct:https://github.com/coderwhy/hy-vue-temp.git'

// exports.vueRepo = vueRepo  也可以用这种方式导出
//解析时就会创建一个空对象，地址赋给exports，然后会把exports赋给module.exports
module.exports = {
    vueRepo
}