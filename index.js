#!/usr/bin/env node
const program = require("commander")
const helpDemo = require("./lib/core/help.js")
const createCommands = require("./lib/core/create.js")

//帮助文件
helpDemo();

//创建命令
createCommands();

program.parse(process.argv)   //解析，执行完parse之后终端才会显示信息


