// const { urlencoded } = require("express")

var bodyParser = requiere('body-parser')
app.use(bodyParser.json())
// app.use(bodyParser,urlencoded({extended:true}))
// var nodemailer =require('nodemailer')

var Usuarios = require(appRoot + '/api/controllers/UserController.js').y

app.get('/Usuarios/Guardar/:nombre',function(request,response){
    Usuarios.Guardar(request,response)
})
app.post('/mipost',function(request,response){
    console.log(request.body)
    response.json({state:true})
})
// var config = require('./config.js').usuario

// app.post('/Usuarios/Guardar', function(request,response){
//     Usuarios.Guardar(request,response)
// })

// app.post('/Usuarios/Modificar', function(request,response){
//     Usuarios.Modificar(request,response)
// })

// app.post('/Usuarios/Eliminar', function(request,response){
//     Usuarios.Eliminar(request,response)
// })

// app.post('/Usuarios/Listar', function(request,response){
//     Usuarios.Guardar(request,response)
// })

// app.post('/enviarcorreo',function(request,response){

//     var transporter= nodemailer.createTransport({
//         host: 'smtp.gmail.com',
//         port: 587,
//         secure: false,
//         requireTLS:true,
//         auth: {
//             user: config.correo,
//             pass: config.clavecorreo
//         }
//     });

//     let mailOptions = {
//         from: config.correo,
//         to: config.correodestino,
//         subject: 'Asunto',
//          text: "Este es un mensaje"
//     };

//     transportar.sendMail(mailOptions,(error,info) => {
//         if(error){
//             console.log(error)
//         }

//         response.json({mensaje:'Mensaje enviado'})
//     })
// })