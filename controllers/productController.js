/**
 * @typedef {import('express').Request} Request
 * @typedef {import('express').Response} Response
 */

const Product = require('../models/Product');

/**
 * Renderiza a pagina de produtos com todos os registros cadastrados.
 * @param {Request} req - Objeto de requisicao do Express.
 * @param {Response} res - Objeto de resposta do Express usado para renderizar a view.
 * @returns {void}
 * @throws {Error} Pode propagar erros inesperados da camada Model durante a leitura.
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
 * Recebe os dados enviados pelo formulario e cadastra um novo produto.
 * @param {Request} req - Requisicao do Express contendo nome e preco em req.body.
 * @param {Response} res - Resposta do Express usada para redirecionar ou retornar erro.
 * @returns {void}
 * @throws {Error} Pode receber erros de validacao gerados por Product.add.
 */
function adicionar(req, res) {
  try {
    const { nome, preco, descricao } = req.body;
    Product.add({ nome, preco, descricao });
    res.redirect('/produtos');
  } catch (error) {
    res.status(400).send(error.message);
  }
}

/**
 * Remove um produto usando o parametro id informado na rota.
 * @param {Request} req - Requisicao do Express contendo o identificador em req.params.id.
 * @param {Response} res - Resposta do Express usada para redirecionar ou retornar erro.
 * @returns {void}
 * @throws {Error} Pode receber erro caso o produto informado nao exista.
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
