const express = require('express');

const routes = express.Router();

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: Busar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

routes.get('/', (request, response) => {
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Alan Teles de Oliveira'
    });
});

routes.get('/users', (request, response) => {
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Alan Teles de Oliveira'
    });
});

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 *  Ex: http://localhost:3333/users?name=Alan
 * Route Params: Parâmetros utilizados para identificar recursos
 *  Ex: http://localhost:3333/users/1
 * request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

routes.post('/query', (request, response) => {
    const params = request.query;

    console.log(params);

    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Alan Teles de Oliveira'
    });
});

routes.post('/params/:id', (request, response) => {
    const params = request.params;

    console.log(params);

    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Alan Teles de Oliveira'
    });
});

routes.post('/body', (request, response) => {
    const body = request.body;

    console.log(body);

    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Alan Teles de Oliveira'
    });
});

module.exports = routes;