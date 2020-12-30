// expres 
const http = require('http');
http.createServer((req, res) => {
        res.writeHead(200, { 'Content_Type': 'application/json' });
        let salida = {
            nombre: "Diego",
            apellido: "Iza",
            edad: 25,
            url: req.url
        }
        res.write(JSON.stringify(salida));


        res.end();
    })
    .listen(8080);
console.log('Escuchando  el puerto 8080');