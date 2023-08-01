/**
 * Métodos de acesso aos dados de cliente no banco de dados.
 */

// Import das bibliotecas próprias
const ClienteDAO = require("./clientedao");

// Retorna uma lista com todos os clientes
const getLista = async (request, response) => {   
  
    //Cria o objeto DAO para acessar o banco de dados
    const dao = new ClienteDAO();

    const rows = await dao.getLista();
    
    response.status(200).json(rows);  
};

// Procura um cliente pelo id
const getCliente = async (request, response) => {
    const clienteId = parseInt(request.params.clienteId);
    
    //Cria o objeto DAO para acessar o banco de dados
    const dao = new ClienteDAO();

    const rows = await dao.getCliente(clienteId);
    
    response.status(200).json(rows);    
};

// Insere um novo cliente
const inserir = async (request, response) => {
    
    const { clienteId, nome, cpf } = request.body ;  

    //Cria o objeto DAO para acessar o banco de dados
    const dao = new ClienteDAO();

    const { rows } = dao.inserir(clienteId, nome, cpf);

    response.status(201).json({ message: `Cliente inserido com clienteId: ${clienteId}` })
};

// Altera um cliente pelo clienteId
const alterar = async (request, response) => {    
    const clienteId = parseInt(request.params.clienteId);
    const { nome, cpf } = request.body;

    //Cria o objeto DAO para acessar o banco de dados
    const dao = new ClienteDAO();

    const rows = await dao.alterar(clienteId, nome, cpf);

    response.status(200).json( { message: `Cliente alterado com clienteId: ${clienteId}` });
};
   

// Exclui um cliente pelo clienteId
const excluir = async (request, response) => {
    const clienteId = parseInt(request.params.clienteId);
    
    //Cria o objeto DAO para acessar o banco de dados
    const dao = new ClienteDAO();

    const rows = dao.excluir(clienteId);

    response.status(200).json( { message: `Cliente excluído com clienteId: ${clienteId}` });    
};

// Exporta as funções
module.exports = {
    getLista,
    getCliente,
    inserir,
    alterar,
    excluir
};