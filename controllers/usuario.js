const {response} = require('express')

//Importación de los modelos
const Pedido = require('../models/usuario')

//Método GET de la API
const pedidoGet = async(req, res = response) =>{
    //const {nombre} = req.query //Desestructuración

    //Consultar todos los pedidos
    const pedidos = await Pedido.find()

    res.json({  //Respuesta en JSON
        pedidos
    })   
}

//Método POST de la api
const pedidoPost = async(req, res) => {
    let mensaje = 'Inserción Exitosa'
    const body = req.body //Captura de atributos
    try {
        const pedido = new Pedido(body) //Instanciando el objeto
        await pedido.save() //Inserta en la colección
    } catch (error) {
        mensaje = error
        console.log(error)
    }
        res.json({
        msg: mensaje
    })
}

//Juan Sebastián Granada

//Modifcación
const pedidoPut = async(req, res = response) => {

    const {nombre, password, rol, estado} = req.body
    let mensaje = 'Modificación exitosa'
    try{
         await Pedido.findOneAndUpdate({nombre: nombre}, 
            {password: password, rol:rol, estado:estado})
    }
    catch(error){
        mensaje = 'Se presentaron problemas en la modificación.'
    }

    res.json({
        msg: mensaje
    })
}

//Eliminación
const pedidoDelete = async(req, res) => {

    const {_id} = req.query
    let mensaje = 'La eliminiación se efectuó exitosamente.'

    try{
        const pedido = await Pedido.deleteOne({_id: _id})
    }
    catch(error){
        mensaje = 'Se presentaron problemas en la eliminación.'
    }

    res.json({
        msg: mensaje
    })
}

module.exports = {
    pedidoGet,
    pedidoPost,
    pedidoPut,
    pedidoDelete
}