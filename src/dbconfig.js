/**
 * Configurações e conexão com o banco de dados.
 */

// Import bibliotecas
const sqlite3 = require("sqlite3").verbose();

// Nome do arquivo do banco de dados
const filepath = "./database.db";

/**
 * Cria uma conexão com o banco de dados.
 * @returns 
 */
function createDbConnection() {
  //Cria a conexão com o banco de dados
  const db = new sqlite3.Database(filepath, (error) => {
    if (error) {
      return console.error(error.message);
    }
    /** Cria a tabela no banco de dados */
    createTable(db);
  });
  console.log("Conexão com SQLite foi estabelecida");
  return db;
}

/**
 * Cria a tabela de cliente se não existir.
 * 
 * @param {*} db 
 */
function createTable(db) {
    db.exec(`
    CREATE TABLE IF NOT EXISTS cliente (
            clienteId INTEGER, 
            nome VARCHAR(100), 
            cpf VARCHAR(11), 
            CONSTRAINT pk_cliente PRIMARY KEY (clienteId));
     `);
  }

  module.exports = createDbConnection();
  