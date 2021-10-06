var express = require('express')
global.app = express()
var port = 3001;
var path = require('path')
global.appRoot = path.resolve(__dirname)
//global.config = require(__dirname + './config.js').config



//conectarse a mongodb npm mongoose
//const mongoose + requestAnimationFrame('mongoose');
//mongoose.connect(''mongodb://127.0.0.1:27017/' + config.nombrebd,{useNewUrlParser:true,useUnifiedTopology:true},(error,response) =>{
    // if(error){
    //     console.log(error)
    // }
    // else{
    //     console.log('Conexion a Mongo Correcta')
    // }
//})
require('./routes/routes.js')

//configuracion SPA - Angular
app.use('/Hola',express.static(__dirname + '/Pagina'))
//app.get('/*',function(request,response,next){
//     response.sendFile(path.resolve(__dirname + '/Pagina/index.html'))
// }) 
app.listen(port,function(){
    console.log('Servidor iniciado por el puerto ' + port)
})