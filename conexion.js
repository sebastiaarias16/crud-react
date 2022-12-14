const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/CrudReact');

const objetobd = mongoose.connection

objetobd.on('connected', ()=>{console.log("Conexcion correcta a mongo")})
objetobd.on('Error', ()=>{console.log("Error en la conexion a mongo")})

module.exports = mongoose