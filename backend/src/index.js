const express = require ('express');
const cors = require ('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
    /*
*Metodos HTTP:
 - GET : Buscar uma informacao do back-end
 - POST : Criar uma informacao no back-end
 - PUT : Alterar uma informacao no back-end
 - DELETE : Deletar uma informacao no back-end
*/

/**
 *                  Tipos de parametros:
 * 
 *      Query Params: parametros nomeados enviados na rota apos "?" (filtros, paginacao) 
 *      Route Params: parametros utilizados para identificar recursos
 *      Request Body: corpo da requisicao, utilizado para criar ou alterar recursos
 * 
 */

 /**
  *                 BANCOS DE DADOS:
  *     SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  *     NoSQL: MongoDB, CouchDB, etc.
  */

  /**
   *                FORMAS DE COMUNICACAO COM BANCO DE DADOS
   *    Driver: SELECT * FROM users
   *    Query Builder: table('users').select('*').where()
   * 
   * 
   */
app.listen(3333);