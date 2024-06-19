const mongoose = require('mongoose');

const AutorSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre del autor es requerido'],
    minlength: [3, 'El nombre debe tener al menos 3 caracteres']
  },
  cita: {
    type: String,
    required: [true, 'La cita del autor es requerida'],
    minlength: [3, 'La cita debe tener al menos 3 caracteres']
  }
}, { timestamps: true });

module.exports = mongoose.model('Autor', AutorSchema);
