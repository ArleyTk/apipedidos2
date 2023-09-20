const {Schema, model} = require('mongoose')

const PedidoSchema = Schema({
    idpedido: {
        type: Number,
        unique: true,
        required: [true, 'El nombre es obligatorio']
    },

    descpedido: {
        type: String,
        required: [true, 'el nombre es obligatorio'],
        minlength: [3, 'Debe tener mínimo 3 caracteres']
        //maxlength:  [7, 'Debe tener máximo 3 caracteres']
    },

    preciopedido: {
        type: Number,
        required: true,
    },

    fechapedido: {
        type: String,
        required: [true, 'el nombre es obligatorio'],
        minlength: [3, 'Debe tener mínimo 3 caracteres']
        //maxlength:  [7, 'Debe tener máximo 3 caracteres']
    },

    productospedido: {
        type: String,
        required: [true, 'el nombre es obligatorio'],
        minlength: [3, 'Debe tener mínimo 3 caracteres']
        //maxlength:  [7, 'Debe tener máximo 3 caracteres']
    },

    clientepedido: {
        type: String,
        required: [true, 'el nombre es obligatorio'],
        minlength: [3, 'Debe tener mínimo 3 caracteres']
        //maxlength:  [7, 'Debe tener máximo 3 caracteres']
    }
})

//Exportar la función PedidoSchema
module.exports = model('Pedido',PedidoSchema)

