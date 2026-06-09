const express = require('express');
const router = express.Router();
const productRoutes = require('./productRoutes');

// Páginas
router.get('/', (req, res) => res.render('home'));
router.get('/sobre', (req, res) => res.render('sobre'));
router.get('/contato', (req, res) => res.render('contato'));

// Rotas de produto em arquivo separado para manter a arquitetura MVC organizada.
router.use('/', productRoutes);

module.exports = router;