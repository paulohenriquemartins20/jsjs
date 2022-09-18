let http = require('http')
let fs = require('fs')
let url = require('url')

let port = 2000;

let serve = http.createServer((req, res) => {
    let urls = url.parse(req.url, true)
    let name = urls.query.nam;

    if (!name) {
        fs.readFile('html.html', (err, data) => {
            res.writeHead(200, { 'content-Type': 'text/html' })
            res.write(data)
            return res.end()
        })
    } else {
        let u = name + '\r,\n';
        fs.appendFile('lit.txt', u, (err, data) => {
            res.writeHead(302, {
                Location: '/',
            })
            return res.end()
        })
    }
})


serve.listen(port, () => {
    console.log(' sevidor esta no ar')
})