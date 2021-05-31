const mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

const notaSchema = new Schema({
    tipoNota: {type: String},
    valorNota: {type: String},
    estudiante: {
        type: Schema.Types.ObjectId,
        ref: "Estudiante"
    },
    curso: {
        type: Schema.Types.ObjectId,
        ref: "Curso"
    }
})

module.exports = mongoose.model("Nota", notaSchema);