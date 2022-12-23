const { readFile } = require('fs/promises');
const Express = require('express')
const app = Express()
const port = 5504

app.use(Express.static('src'))

app.get('/', (req, res) => {
    console.log(req)
    
})

app.listen(port, () => console.info(`🚀 Running in port ${port}`))


readFile('./package.json')
    .then(file => JSON.parse(file).version) // to json and get version
    .then(v => console.log(v)) // print

const octokit = require('@octokit/core')
const url = 'https://github.com/ysh-rael/drag-drop_card/blob/main/package.json'
