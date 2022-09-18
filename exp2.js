let express = require('express')
let path = require('path')
let port = 3000;
let app = express()
let basepath = path.join(__dirname, 'oo')

app.get('/users/:id', (req, res) => {
    let id = req.params.id;
    console.log('aqui esta ', id)
    res.sendFile(basepath + '/ht.html')
})


app.get('/', (req, res) => {
    res.sendFile(basepath + '/html.html')
})


app.listen(port, () => {
    console.log(' ligado')
})