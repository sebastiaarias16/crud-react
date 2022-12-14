const express = require('express')
const app = express()


//conexion con mongoDB

const archivoBD = require('./conexion')

//importacion del archivo de rutas y modelo usuario
const rutausuario = require('./rutas/usuario')

//import body parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))

app.use('/api/usuario', rutausuario)

app.get('/', (req, res) =>{
    res.end('Bienvenido al servidor back end NODE.JS.   corriendo...')
})

//configuracion de server

app.listen(5000, function(){
    console.log('server NODE corriendo como se debe')
})