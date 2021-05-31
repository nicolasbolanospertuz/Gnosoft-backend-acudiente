const mongoose = require('mongoose'),
    Schema   = mongoose.Schema;
const bcrypt = require('bcryptjs');

const acudienteSchema = new Schema({
    name: {type: String},
    last_name: {type: String},
    email: {type: String},
    phone: {type: String},
    password: {type: String},
    estudiantes: [{
        type: Schema.Types.ObjectId,
        ref: "Estudiante"
    }]
});

acudienteSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hash = bcrypt.hash(password, salt);
    return hash;
};

acudienteSchema.methods.matchPassword = async function (password){
    return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model("Acudiente", acudienteSchema);