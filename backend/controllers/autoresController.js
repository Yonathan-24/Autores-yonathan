const Autor = require('../models/Autor');

// Obtener todos los autores
exports.getAllAutores = async (req, res) => {
  try {
    const autores = await Autor.find().sort('nombre');
    res.json(autores);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Crear un nuevo autor
exports.createAutor = async (req, res) => {
  const autor = new Autor(req.body);
  try {
    const nuevoAutor = await autor.save();
    res.status(201).json(nuevoAutor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Obtener un autor por ID
exports.getAutorById = async (req, res) => {
  try {
    const autor = await Autor.findById(req.params.id);
    if (!autor) throw new Error('No se encontró el autor');
    res.json(autor);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// Actualizar un autor
exports.updateAutor = async (req, res) => {
  try {
    const autor = await Autor.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!autor) throw new Error('No se encontró el autor');
    res.json(autor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Eliminar un autor
exports.deleteAutor = async (req, res) => {
  try {
    const autor = await Autor.findByIdAndDelete(req.params.id);
    if (!autor) throw new Error('No se encontró el autor');
    res.json({ message: 'Autor eliminado' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
