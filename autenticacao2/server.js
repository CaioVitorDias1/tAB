
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();
const port = 3000;

app.use(cors())
app.use(bodyParser.json());



const emailsPermitidos = new Set( ['andre@gmail.com', 'caio@gmail.com','ian@gmail.com']);

app.post('/verificarEmail', (req, res) => {
    const email = req.body.email;
    const valid = emailsPermitidos.has(email);
    console.log('chegou na rota')
    res.json({ valid });
});

// Rota para a página desejada
app.get('/paginaDesejada', (req, res) => {
    res.sendFile(__dirname + '/paginaaudhihdua.html');
});

app.listen(port, () => {
    console.log(`Servidor iniciado em http://localhost:${port}`);
});