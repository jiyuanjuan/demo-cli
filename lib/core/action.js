//download-git-repo插件用来下载文件，采用的是原始的异步方法，会产生回调地狱
//通过promisify把插件转化成promis形式
//util是node自带的库
const { promisify } = require('util')
const download = promisify(require('download-git-repo'))

const { vueRepo } = require('../config/repo-config')
const { commandSpawn } = require('../utils/terminal')

const createrProjectAction = async (project) => {
    //clone文件
    await download(vueRepo, project, { clone: true })
    //执行npm install
    const command = process.platform === 'win32' ? 'npm.cmd' : 'npm'
    await commandSpawn(command, ['install'], {cwd:`${project}`})
    //执行npm run serve
    await commandSpawn(command,['run','serve'],{cwd:`${project}`})
}

module.exports = {
    createrProjectAction
}