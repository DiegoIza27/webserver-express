const express = require('express')
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'));
// expres hbs engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');
// helpers
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear()
})
hbs.registerHelper('capitalizar', (texto) => {
        let palabras = texto.spli('');
        palabras.forEach(palabra, index => {
            palabra[index] = palabras.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()
        });
        return palabras.join('');
    })
    // aqui agregar tu pagina web al servidor 
app.get('/', (req, res) => {

    res.render('home', {
        nombre: "Diego"

    });

})
app.get('/about', (req, res) => {

    res.render('about', {
        nombre: "Diego",
        anio: new Date().getFullYear()
    });

})


app.listen(port, () => {
    console.log(`escuando peticiones en el puerto ${port}`)
})
app.get('/data', (req, res) => {

    res.send('Hola Data que tal ');
})