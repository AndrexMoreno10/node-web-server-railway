const express = require('express')
const hbs = require('hbs');
require('dotenv').config();

const app = express()
const port = process.env.PORT;


//handlebars --> Para renderizar vistas sencillas // handlebars trabaja con MVC
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials');

//Servir contenido estatico : MidleWord
app.use(express.static('public')); // los midleware se ejecutan antes que lo de abajo ,
//osea nunca se va imprimir la respuesta de abajo porque esta sirve la info del index y manda la respuesta y lo de abajo ya no se ejecutaria
// // Entonces podriamos borrarla  - pero la comentare

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Andres Moreno',
        titulo: 'Curso De Node'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Andres Moreno',
        titulo: 'Curso De Node'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Andres Moreno',
        titulo: 'Curso De Node'
    });
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/old/404.html');
});

app.listen(port, () => {
    console.log(`Example app Listenig at http://localhost:${port}`);
})