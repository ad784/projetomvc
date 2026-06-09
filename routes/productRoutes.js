const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/produtos', productController.listar);
router.post('/produtos', productController.adicionar);
router.get('/delete/:id', productController.excluir);

module.exports = router;