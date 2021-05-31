const mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

const acudienteSchema = new Schema({
    nombres: {type: String},
    apellidos: {type: String},
    telefono: {type: String},
    tarjeta: {type: String},
    fax: {type: String},
    registroLaboral: {type: String},
    tipoNomina: {type: String},
    tipoContrato: {type: String},
    otros: {type: JSON},
    estudiantes: [{
        type: Schema.Types.ObjectId,
        ref: "Estudiante"
    }]
})

module.exports = mongoose.model("Acudiente", acudienteSchema);