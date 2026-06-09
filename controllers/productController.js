/**
 * @typedef {import('express').Request} Request
 * @typedef {import('express').Response} Response
 */

const Product = require('../models/Product');

/**
 * Exibe a lista de produtos armazenados em memória.
 * @param {Request} req
 * @param {Response} res
 * @returns {void}
 */
function listar(req, res) {
  try {
    const produtos = Product.getAll();
    res.render('produtos', { produtos });
  } catch (error) {
    res.status(500).render('produtos', { produtos: [], error: error.message });
  }
}

/**
 * Recebe os dados do formulário e cria um novo produto.
 * @param {Request} req
 * @param {Response} res
 * @returns {void}
 */
function adicionar(req, res) {
  try {
    const { nome, preco } = req.body;
    Product.add({ nome, preco });
    res.redirect('/produtos');
  } catch (error) {
    res.status(400).send(error.message);
  }
}

/**
 * Exclui um produto usando o parâmetro de rota id.
 * @param {Request} req
 * @param {Response} res
 * @returns {void}
 */
function excluir(req, res) {
  try {
    const { id } = req.params;
    Product.delete(id);
    res.redirect('/produtos');
  } catch (error) {
    res.status(404).send(error.message);
  }
}

module.exports = {
  listar,
  adicionar,
  excluir
};