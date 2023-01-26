const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true }, // Nom de type string et obligatoire
    age: Number, // age numero
    email: { type: String, required: true, unique: true } // email de type string obligatoire et unique
})

module.exports = mongoose.model('Ramy', UserSchema) //Users collection dans mongoDb