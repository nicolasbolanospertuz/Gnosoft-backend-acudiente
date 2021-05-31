const mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

const profesorSchema = new Schema({
    nombres: {type: String},
    apellidos: {type: String},
    cursos: [{
        type: Schema.Types.ObjectId,
        ref: "Curso"
    }]
})

module.exports = mongoose.model("Profesor", profesorSchema);