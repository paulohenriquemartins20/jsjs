let http = require('http')
let fs = require('fs')
let url = require('url')
let port = 3000;


let serve = http.createServer((req, res) => {
    let urlinfo = url.parse(req.url, true)
    let arquivo = urlinfo.pathname.substring(1)
    let name = urlinfo.query.nam;

    if (arquivo.includes('html')) {
        if (fs.existsSync(arquivo)) {
            fs.readFile(arquivo, (err, data) => {
                res.writeHead(200, { 'content-Type': 'text/html' })
                res.write(data)
                return res.end()
            })
        }
    }
    if (!name) {
        fs.readFile('html.html', (err, data) => {
            res.writeHead(200, { 'content-Type': 'text/html' })
            res.write(data)
            return res.end()
        })
    } else {
        let mais2 = name + '\n\r';
        fs.appendFile('poo.txt', mais2, (err, data) => {
            res.writeHead(302, {
                Location: '/',
            })
            return res.end()
        })
    }


})



serve.listen(port, () => {
    console.log('serviço ligado')
})