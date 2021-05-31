const mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

const cursoSchema = new Schema({
    nombre: {type: String},
    descripcion: {type: String},
    tipoCalificacion: {type: String},
    estudiantes:[{
        type: Schema.Types.ObjectId,
        ref: "Estudiante"
    }],
    profesor:{
        type: Schema.Types.ObjectId,
        ref: "Profesor"
    },
    notas:[{
        type: Schema.Types.ObjectId,
        ref: "Nota"
    }]
})

module.exports = mongoose.model("Curso", cursoSchema);