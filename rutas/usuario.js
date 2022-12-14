const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const esquem = mongoose.Schema

const eschemausuario = new esquem({
    nombre: String,
    email: String,
    telefono: String,
    idusuario: String
})

const modelousuario = mongoose.model('usuarios', eschemausuario)

module.exports = router

/*ruta para probar
router.get('/ejemplo', (req, res)=>{
    res.end("Saludo carga desde ruta ejemplo")
})
*/


// agregar usuario
router.post('/agregarUsuario', (req, res) =>{
    const nuevousuario = new modelousuario({
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono,
        idusuario: req.body.idusuario
    })
    nuevousuario.save(function(err){
        if(!err){
            res.send("Usuario agregado correctamente")
        }else{
            res.send(err)
        }
    })
})


//obtener todos los usuarios

router.get('/obtenerusuarios', (req, res)=>{
    modelousuario.find({}, function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})

//obtener data de usuario

router.post('/obtenerdatausuario', (req, res)=>{
    modelousuario.find({idusuario:req.body.idusuario}, function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})

// Editar usuario
router.post('/actualizausuario', (req, res) =>{

    modelousuario.findOneAndUpdate({idusuario:req.body.idusuario}, {
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono
    }, (err) =>{
        if(!err){
            res.send('Usuario actualizado')
        }else{
            res.send(err)
        }
    })
})

// Borrar usuario
router.post('/borrarusuario', (req, res) =>{

    modelousuario.findOneAndDelete({idusuario:req.body.idusuario}, (err)=> {
        if(!err){
            res.send('Usuario Borrado')
        }else{
            res.send(err)
        }
    })
})