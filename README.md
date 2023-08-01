# Programa servidor API-REST do CRUD de Cliente utilizando Node.js e SQLite com DAO.

- O projeto foi desenvolvido no VSCodde deve ser chamado "cadastrocliente_nodejs_v1".
- Programa cliente está no projeto "cadastrocliente_reactjs_v1".
- Programa servidor web que cria o webservice na posta 8000.
- Implementação do serviço utilizando REST e os métodos GET, POST, PUT e DELETE.
- Os dados de configuração da integração com o banco de dados estão no arquivo "src/dbconfig.js".
- A tabela cliente possui os campos clienteId, nome e cpf.

- Dependências:    
    - express,
    - cors,
    - sqlite3.

- Execução:    
   <pre><code>npm start</code></pre>

- Arquivos fontes do projeto em src:
    - index.js - Programa principal com o servidor Express.
    - clientedao.js - Classe de acesso aos objetos de dados(DAO) do banco de dados.
    - dao.js - Classe de interação com o banco de dados.
    - clienterecurso.js - Contêm os métodos de acesso aos recursos do banco de dados.
    - dbconfig.js - Contêm as configurações e conexão com o banco de dados.
    - servicos.js - Contêm as rotas aos métodos de acesso ao banco de dados.