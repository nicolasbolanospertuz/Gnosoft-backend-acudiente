var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var acudienteSchema = new Schema({
    muerto: { type: String, enum:
        ['Si', 'No']
                },
    tarjeta: {type: String},
    fax: {type: String},
    registroLaboral: {type: String},
    tipoNomina: {type: String},
    tipoContrato: {type: String},
    otros: {type: JSON}

});