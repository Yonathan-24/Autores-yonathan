const express = require('express');
const router = express.Router();
const autoresController = require('../controllers/autoresController');

router.get('/', autoresController.getAllAutores);
router.post('/', autoresController.createAutor);
router.get('/:id', autoresController.getAutorById);
router.put('/:id', autoresController.updateAutor);
router.delete('/:id', autoresController.deleteAutor);

module.exports = router;
