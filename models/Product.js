const { getDatabaseConfig } = require('../config/database');

/**
 * Lista de produtos mantida em memoria para simular uma camada de persistencia.
 * @type {Product[]}
 */
let products = [];

const dbConfig = getDatabaseConfig();

/**
 * Dados necessarios para criar ou atualizar um produto.
 * @typedef {Object} ProductPayload
 * @property {number} [id] - Identificador unico do produto.
 * @property {string} nome - Nome comercial do produto.
 * @property {number|string} preco - Preco do produto.
 * @property {string} [descricao] - Descricao opcional do produto.
 */

/**
 * Configuracao de conexao usada pela aplicacao.
 * @typedef {Object} DatabaseConfig
 * @property {string} host - Host do banco de dados.
 * @property {string} port - Porta do banco de dados.
 * @property {string} user - Usuario de conexao.
 * @property {string} password - Senha de acesso.
 * @property {string} database - Nome do banco de dados.
 */

/**
 * Representa um produto cadastrado no sistema e centraliza as operacoes de
 * persistencia/manipulacao de dados usadas pelos controllers.
 */
class Product {
  /**
   * Cria uma nova instancia de produto.
   * @param {ProductPayload} props - Dados usados para montar o produto.
   * @throws {Error} Disparado quando nome ou preco nao sao informados.
   */
  constructor({ id, nome, preco, descricao }) {
    if (!nome || preco == null) {
      throw new Error('Produto invalido. Nome e preco sao obrigatorios.');
    }

    this.id = id;
    this.nome = nome;
    this.preco = Number(preco);
    this.descricao = descricao || '';
  }

  /**
   * Retorna a configuracao de banco carregada para a aplicacao.
   * @returns {DatabaseConfig} Dados de conexao definidos por variaveis de ambiente.
   */
  static getConnectionInfo() {
    return dbConfig;
  }

  /**
   * Busca todos os produtos cadastrados em memoria.
   * @returns {Product[]} Lista de produtos cadastrados.
   */
  static getAll() {
    return products;
  }

  /**
   * Adiciona um novo produto na lista em memoria.
   * @param {ProductPayload} produto - Dados do produto recebido pela aplicacao.
   * @returns {Product} Produto criado com identificador gerado automaticamente.
   * @throws {Error} Disparado quando os dados do produto sao invalidos.
   */
  static add(produto) {
    const novoProduto = new Product({
      id: Date.now(),
      nome: produto && produto.nome,
      preco: produto && produto.preco,
      descricao: produto && produto.descricao
    });

    products.push(novoProduto);
    return novoProduto;
  }

  /**
   * Remove um produto cadastrado a partir do seu identificador.
   * @param {number|string} id - Identificador do produto que sera removido.
   * @returns {boolean} Retorna true quando a remocao e concluida.
   * @throws {Error} Disparado quando nenhum produto e encontrado para o id informado.
   */
  static delete(id) {
    const originalLength = products.length;
    products = products.filter((item) => item.id != id);

    if (products.length === originalLength) {
      throw new Error(`Produto com id ${id} nao encontrado.`);
    }

    return true;
  }
}

module.exports = Product;
