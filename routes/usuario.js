const {Router} = require('express')
//Desestructuración. Extraer un atributo de un objeto

const route = Router() 

//Importar métodos del controlador
const {pedidoGet, pedidoPost, pedidoPut, pedidoDelete} = require('../controllers/usuario')

route.get('/', pedidoGet) //Listar Datos

route.post('/', pedidoPost) //Insertar Datos

route.put('/', pedidoPut) //Modificar Datos

route.delete('/', pedidoDelete) //Eliminar Datos

module.exports = route