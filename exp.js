const express = require('express')
const app = express()
const path = require('path')

function checando(req, res, next) {
    res.paulo = true;

    if (res.paulo) {
        console.log('nao pode')

    } else {
        console.log(' noa permitido')
        res.send('usuario nao bate')
    }
}

let p = path.join(__dirname, 'oo')
let port = 2000
app.get('/', (req, res) => {
    res.sendFile(p + '/html.html')

})

app.listen(port, () => {
    console.log(' rodando')
})
app.use(checando)