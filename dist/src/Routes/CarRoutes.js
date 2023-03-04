"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CarController_1 = __importDefault(require("../Controllers/CarController"));
const carRoutes = (0, express_1.Router)();
const ROUTE = '/cars/:id';
carRoutes.post('/cars', (req, res, next) => new CarController_1.default(req, res, next)
    .create()
// #swagger.tags = ['Cars']
// #swagger.summary = 'Criar um novo carro'
// #swagger.description = 'Endpoint para cadastrar um novo carro no banco de dados.'
/* #swagger.parameters['info'] = {
  in: 'body',
  type: 'object',
  description: 'Informações necessárias para criar um novo carro.',
  schema: { $ref: "#/definitions/Car" },
} */
/* #swagger.responses[201] = {
  schema: { $ref: "#/definitions/Car" },
  description: 'Requisição para criar um novo carro efetuada com sucesso!'
} */
/* #swagger.responses[400] = {
  schema: { $ref: "#/definitions/BodyNotFoundError" },
  description: 'Erro! A requisição falhou! O body com as informações necessárias não foi encontrado.'
} */
/* #swagger.responses[500] = {
  schema: { $ref: "#/definitions/InvalidBodyError" },
  description: 'Erro! A requisição falhou! Verifique se as informações do body não estão ausentes ou incorretas.'
} */ );
carRoutes.get('/cars', (req, res, next) => new CarController_1.default(req, res, next)
    .getAll()
// #swagger.tags = ['Cars']
// #swagger.summary = 'Listar todos os carros'
// #swagger.description = 'Endpoint para listar todos os carros cadastrados no banco de dados.'
/* #swagger.responses[200] = {
  schema: { $ref: "#/definitions/Car" },
  description: 'Requisição para listar todos os carros efetuada com sucesso!'
} */ );
carRoutes.get(ROUTE, (req, res, next) => new CarController_1.default(req, res, next)
    .getById()
// #swagger.tags = ['Cars']
// #swagger.summary = 'Buscar um carro pelo seu ID'
// #swagger.description = 'Endpoint para buscar um carro cadastrado no banco de dados pelo seu ID.'
/* #swagger.parameters['id'] = {
  in: 'path',
  type: 'string',
  required: true,
  description: 'ID necessário para buscar o carro cadastrado no banco de dados.'
} */
/* #swagger.responses[200] = {
  schema: { $ref: "#/definitions/Car" },
  description: 'Requisição para buscar um carro pelo seu ID efetuada com sucesso!'
} */
/* #swagger.responses[404] = {
  schema: { $ref: "#/definitions/CarNotFoundError" },
  description: 'Erro! A requisição falhou! O carro não foi encontrado.'
} */
/* #swagger.responses[422] = {
  schema: { $ref: "#/definitions/InvalidIdError" },
  description: 'Erro! A requisição falhou! O ID é inválido.'
} */ );
carRoutes.put(ROUTE, (req, res, next) => new CarController_1.default(req, res, next)
    .update()
// #swagger.tags = ['Cars']
// #swagger.summary = 'Atualizar um carro buscando pelo seu ID'
// #swagger.description = 'Endpoint para buscar um carro cadastrado no banco de dados pelo seu ID, e depois atualizá-lo.'
/* #swagger.parameters['id'] = {
  in: 'path',
  type: 'string',
  required: true,
  description: 'ID necessário para buscar o carro cadastrado no banco de dados.'
} */
/* #swagger.parameters['info'] = {
  in: 'body',
  type: 'object',
  description: 'Informações necessárias para atualizar o carro.',
  schema: { $ref: "#/definitions/Car" },
} */
/* #swagger.responses[200] = {
  schema: { $ref: "#/definitions/Car" },
  description: 'Requisição para atualizar um carro efetuada com sucesso!'
} */
/* #swagger.responses[400] = {
  schema: { $ref: "#/definitions/BodyNotFoundError" },
  description: 'Erro! A requisição falhou! O body com as informações necessárias não foi encontrado.'
} */
/* #swagger.responses[404] = {
  schema: { $ref: "#/definitions/CarNotFoundError" },
  description: 'Erro! A requisição falhou! O carro não foi encontrado.'
} */
/* #swagger.responses[422] = {
  schema: { $ref: "#/definitions/InvalidIdError" },
  description: 'Erro! A requisição falhou! O ID é inválido.'
} */
/* #swagger.responses[500] = {
  schema: { $ref: "#/definitions/InvalidBodyError" },
  description: 'Erro! A requisição falhou! Verifique se as informações do body não estão ausentes ou incorretas.'
} */ );
carRoutes.delete(ROUTE, (req, res, next) => new CarController_1.default(req, res, next)
    .delete()
// #swagger.tags = ['Cars']
// #swagger.summary = 'Deletar um carro buscando pelo seu ID'
// #swagger.description = 'Endpoint para deletar um carro cadastrado no banco de dados buscando pelo seu ID.'
/* #swagger.parameters['id'] = {
  in: 'path',
  type: 'string',
  required: true,
  description: 'ID necessário para buscar o carro cadastrado no banco de dados.'
} */
/* #swagger.responses[204] = {
  description: 'A requisição para deletar um carro cadastrado no banco de dados foi efetuada com sucesso.'
} */
/* #swagger.responses[404] = {
  schema: { $ref: "#/definitions/CarNotFoundError" },
  description: 'Erro! A requisição falhou! O carro não foi encontrado.'
} */
/* #swagger.responses[422] = {
  schema: { $ref: "#/definitions/InvalidIdError" },
  description: 'Erro! A requisição falhou! O ID é inválido.'
} */ );
exports.default = carRoutes;
