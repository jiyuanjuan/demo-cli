const program = require("commander")
const {
    createrProjectAction
} = require("./action")

const createCommands = () => {
    program
        .command('create  <project> [others...]')
        .description('clone a repository int a folder')
        .action(createrProjectAction)
}

module.exports = createCommands