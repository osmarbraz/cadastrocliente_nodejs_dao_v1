/**
 * Classe de acesso a dados de clientes.
 */

// Import das bibliotecas
const DAO = require("./dao");

// Define a classe ClienteDAO 
class ClienteDAO extends DAO {

    /**
     * Retorna uma lista com todos os clientes.
     * 
     * @returns uma lista.
     */
    getLista() {
        const sql = 'SELECT * FROM cliente';
        const params = [];

        return this.all(sql, params);
      }

    /**
     * Retorna um cliente pelo id.
     * 
     * @param {*} clienteId O id do cliente.
     * @returns Os dados do cliente.
     */
    getCliente(clienteId){
        const sql = 'SELECT * FROM CLIENTE WHERE ClienteId = ?';
        const params = [clienteId];

        return this.each(sql, params);
    }

    /**
     * Insere um novo cliente.
     * 
     * @param {*} clienteId O id do cliente.
     * @param {*} nome O nome do cliente.
     * @param {*} cpf O cpf do cliente.
     * @returns 
     */
    inserir(clienteId, nome, cpf){
        const sql = 'INSERT INTO CLIENTE (clienteId, nome, cpf) VALUES (?, ?, ?)';
        const params =  [clienteId, nome, cpf];

        return this.run(sql, params);
    }

    /**
     * Altera os dados de um cliente pelo id.
     * 
     * @param {*} clienteId O id do cliente.
     * @param {*} nome O nome do cliente.
     * @param {*} cpf O cpf do cliente.
     * @returns 
     */
    alterar(clienteId, nome, cpf){
        const sql = 'UPDATE CLIENTE SET nome = ?, cpf = ? WHERE clienteId = ?';
        const params = [nome, cpf, clienteId];

        return this.run(sql, params);
    }

    /**
     * Exclui um cliente pelo id.
     * 
     * @param {*} clienteId O id do cliente.
     * @returns 
     */
    excluir(clienteId){        
        const sql = 'DELETE FROM CLIENTE WHERE clienteId = ?';
        const params = [clienteId];

        return this.run(sql, params);
    }
}

// Exporta o modelo
module.exports = ClienteDAO;