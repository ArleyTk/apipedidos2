const {response} = require('express')

//Importación de los modelos
const Pedido = require('../models/usuario')

//Método GET de la API
const pedidoGet = async(req, res = response) =>{
    //const {nombre} = req.query //Desestructuración
    const {_id} = req.query;
    //Consultar todos los usuarios
    try {
        let pedidos;

        if (_id) {
            // Si se proporciona un id, realizar una búsqueda por nombre
            pedidos = await Pedido.find({ _id: _id });
        } else {
            // Si no se proporciona un id, consultar todos los clientes
            pedidos = await Pedido.find();
        }

        res.json({ pedidos });
    } catch (error) {
        console.error('Error al buscar clientes:', error);
        res.status(500).json({ mensaje: 'Error interno del servidor' });
    }  
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

    const {_id, idpedido, descpedido, preciopedido, fechapedido, productospedido, clientepedido} = req.body
    let mensaje = 'Modificación exitosa'
    try{
         await Pedido.findOneAndUpdate({_id: _id}, {$set: {
            idpedido:idpedido, descpedido:descpedido, preciopedido:preciopedido, fechapedido:fechapedido, productospedido: productospedido, clientepedido:clientepedido
    }}) 
         
           
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