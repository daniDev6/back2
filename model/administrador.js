const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    nombre: String,
    email: String,
    contraseña: String
}, { collection: 'administradores' });

const Usuario = mongoose.model('administradores', AdminSchema);

module.exports = Usuario;