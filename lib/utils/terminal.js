const {spawn} = require('child_process')

const commandSpawn = (...args) => {
    return new Promise((resolve,reject) => {
        const childProcess = spawn(...args)
        childProcess.stdout.pipe(process.stdout)
        process.on('close',()=>{
            resolve()
        })
    })
}

module.exports = {
    commandSpawn
}