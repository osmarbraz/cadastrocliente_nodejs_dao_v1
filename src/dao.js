// Import das bibliotecas próprias

// Cria a conexão com o banco de dados
const db = require("./dbconfig");

class DAO {
    
    /**
     * Construtor da classe DAO.
     */
    constructor() {
        //Atribui a conexão com atributo da classe.
        this.db = db
    }

    /**
     * Executa declarações SQL no banco de dados. 
     * Insert, Update e Delete.
     * @param {*} sql 
     * @param {*} params 
     * @returns 
     */
    run(sql, params = []) {
        return new Promise((resolve, reject) => {
            this.db.run(sql, params, function (err) {
                if (err) {
                    console.log('Erro rodando sql ' + sql);
                    console.log(err);
                    reject(err)
                } else {
                    resolve({id: this.lastID})
                }
            })
        })
    }

    /**
     * Retorna somente um registro.
     * 
     * @param {*} sql 
     * @param {*} params 
     * @returns 
     */
    get(sql, params = []) {
        return new Promise((resolve, reject) => {
            this.db.get(sql, params, (err, result) => {
                if (err) {
                    console.log('Erro rodando sql: ' + sql);
                    console.log(err);
                    reject(err)
                } else {
                    resolve(result)
                }
            })
        })
    }

    /**
     * Retorna uma lista de objetos.
     * 
     * @param {*} sql 
     * @param {*} params 
     * @returns 
     */
    all(sql, params = []) {
        return new Promise((resolve, reject) => {
            this.db.all(sql, params, (err, rows) => {
                if (err) {
                    console.log('Erro rodando sql: ' + sql);
                    console.log(err);
                    reject(err)
                } else {
                    resolve(rows)
                }
            })
        })
    }

    /**
     * Retorna cada objeto que atende a consulta.
     * 
     * @param {*} sql 
     * @param {*} params 
     * @returns 
     */
    each(sql, params = []) {
        return new Promise((resolve, reject) => {
            this.db.each(sql, params, (err, rows) => {
                if (err) {
                    console.log('Erro rodando sql: ' + sql);
                    console.log(err);
                    reject(err)
                } else {
                    resolve(rows)
                }
            })
        })
    }
}

module.exports = DAO;