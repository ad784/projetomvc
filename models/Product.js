/**
 * Persiste o estado atual dos produtos em memória.
 * @type {Product[]}
 */
let products = [];

const { getDatabaseConfig } = require('../config/database');
const dbConfig = getDatabaseConfig();

/**
 * Representa um produto registrado na aplicação.
 */
class Product {
  /**
   * Cria uma nova instância de produto.
   * @param {Object} props
   * @param {number} [props.id]
   * @param {string} props.nome
   * @param {number} props.preco
   * @param {string} [props.descricao]
   */
  constructor({ id, nome, preco, descricao }) {
    this.id = id;
    this.nome = nome;
    this.preco = preco;
    this.descricao = descricao || '';
  }

  /**
   * Retorna a configuração de banco utilizada pela aplicação.
   * @returns {Object}
   */
  static getConnectionInfo() {
    return dbConfig;
  }

  /**
   * Obtém todos os produtos em memória.
   * @returns {Product[]}
   */
  static getAll() {
    return products;
  }

  /**
   * Adiciona um novo produto à lista em memória.
   * @param {Product} produto
   * @returns {Product}
   * @throws {Error} Quando o produto é inválido ou campos obrigatórios estão ausentes.
   */
  static add(produto) {
    if (!produto || !produto.nome || produto.preco == null) {
      throw new Error('Produto inválido. Nome e preço são obrigatórios.');
    }

    const novoProduto = new Product({
      id: Date.now(),
      nome: produto.nome,
      preco: Number(produto.preco),
      descricao: produto.descricao
    });

    products.push(novoProduto);
    return novoProduto;
  }

  /**
   * Remove um produto pelo ID.
   * @param {number|string} id
   * @returns {boolean} Retorna true quando o produto foi removido.
   * @throws {Error} Quando o produto não existe.
   */
  static delete(id) {
    const originalLength = products.length;
    products = products.filter((item) => item.id != id);

    if (products.length === originalLength) {
      throw new Error(`Produto com id ${id} não encontrado.`);
    }

    return true;
  }
}

module.exports = Product;