/**
 * Configuração de conexão com o banco de dados.
 * @typedef {Object} DatabaseConfig
 * @property {string} host - Host do banco de dados.
 * @property {string} port - Porta do banco de dados.
 * @property {string} user - Usuário de conexão.
 * @property {string} password - Senha de acesso.
 * @property {string} database - Nome do schema ou database.
 */

/**
 * Retorna os valores de ambiente usados pela aplicação.
 * @returns {DatabaseConfig}
 */
function getDatabaseConfig() {
  return {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || '3306',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'projeto_mvc'
  };
}

module.exports = { getDatabaseConfig };