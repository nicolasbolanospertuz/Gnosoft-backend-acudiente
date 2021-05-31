const mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

const estudianteSchema = new Schema({
    nombre: {type: String}, 
    apellidos: {type: String},
    documento: {type: String},
    direccion: {type: String},
    email: {type: String},
    nombreUsuario: {type: String},
    acudiente: {
        type: Schema.Types.ObjectId,
        ref: "Acudiente"
    },
    cursos: [{
        type: Schema.Types.ObjectId,
        ref: "Curso"
    }],
    notas: [{
        type: Schema.Types.ObjectId,
        ref: "Nota"
    }]
})

module.exports = mongoose.model("Estudiante", estudianteSchema);