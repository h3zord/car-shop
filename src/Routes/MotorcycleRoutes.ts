import { NextFunction, Request, Response, Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const motorcycleRoutes = Router();

const ROUTE = '/motorcycles/:id';

motorcycleRoutes.post(
  '/motorcycles', 
  (req: Request, res: Response, next: NextFunction) => new MotorcycleController(req, res, next)
    .create()
  
  // #swagger.tags = ['Motorcycles']
  // #swagger.summary = 'Cadastrar uma nova moto'
  // #swagger.description = 'Endpoint para cadastrar um nova moto no banco de dados.'

  /* #swagger.parameters['info'] = {
    in: 'body',
    type: 'object',
    description: 'Informações necessárias para cadastrar uma nova moto.',
    schema: { $ref: "#/definitions/Motorcycle" },
  } */

  /* #swagger.responses[201] = { 
    schema: { $ref: "#/definitions/Motorcycle" },
    description: 'Requisição para cadastrar uma nova moto efetuada com sucesso!' 
 } */

  /* #swagger.responses[400] = { 
    schema: { $ref: "#/definitions/BodyNotFoundError" },
    description: 'Erro! A requisição falhou! O body com as informações necessárias não foi encontrado.' 
  } */
  
  /* #swagger.responses[500] = { 
    schema: { $ref: "#/definitions/InvalidBodyError" },
    description: 'Erro! A requisição falhou! Verifique se as informações do body não estão ausentes ou incorretas.' 
  } */,
);

motorcycleRoutes.get(
  '/motorcycles',
  (req: Request, res: Response, next: NextFunction) => new MotorcycleController(req, res, next)
    .getAll()
  
  // #swagger.tags = ['Motorcycles']
  // #swagger.summary = 'Listar todas as motos'
  // #swagger.description = 'Endpoint para listar todas as motos cadastradas no banco de dados.'

  /* #swagger.responses[200] = { 
    schema: { $ref: "#/definitions/Motorcycle" },
    description: 'Requisição para listar todas as motos efetuada com sucesso!' 
  } */,
);

motorcycleRoutes.get(
  ROUTE,
  (req: Request, res: Response, next: NextFunction) => new MotorcycleController(req, res, next)
    .getById()
    
  // #swagger.tags = ['Motorcycles']
  // #swagger.summary = 'Buscar uma moto pelo seu ID'
  // #swagger.description = 'Endpoint para buscar uma moto cadastrada no banco de dados pelo seu ID'

  /* #swagger.parameters['id'] = {
    in: 'path',
    type: 'string',
    required: true,
    description: 'ID necessário para buscar a moto cadastrada no banco de dados.'
  } */

  /* #swagger.responses[200] = {
    schema: { $ref: "#/definitions/Motorcycle" },
    description: 'Requisição para buscar uma moto pelo seu ID efetuada com sucesso!' 
  } */

  /* #swagger.responses[404] = { 
    schema: { $ref: "#/definitions/MotorcycleNotFoundError" },
    description: 'Erro! A requisição falhou! A moto não foi encontrada.' 
  } */

  /* #swagger.responses[422] = { 
    schema: { $ref: "#/definitions/InvalidIdError" },
    description: 'Erro! A requisição falhou! O ID é inválido.' 
  } */,
);

motorcycleRoutes.put(
  ROUTE,
  (req: Request, res: Response, next: NextFunction) => new MotorcycleController(req, res, next)
    .update()
    
  // #swagger.tags = ['Motorcycles']
  // #swagger.summary = 'Atualizar uma moto buscando pelo seu ID'
  // #swagger.description = 'Endpoint para buscar uma moto cadastrada no banco de dados pelo seu ID, e depois atualizá-la.'

  /* #swagger.parameters['id'] = {
    in: 'path',
    type: 'string',
    required: true,
    description: 'ID necessário para buscar a moto cadastrada no banco de dados.'
  } */

  /* #swagger.parameters['info'] = {
    in: 'body',
    type: 'object',
    description: 'Informações necessárias para atualizar a moto.',
    schema: { $ref: "#/definitions/Motorcycle" },
  } */

  /* #swagger.responses[200] = { 
    schema: { $ref: "#/definitions/Motorcycle" },
    description: 'Requisição para atualizar uma moto efetuada com sucesso!' 
  } */

  /* #swagger.responses[400] = { 
    schema: { $ref: "#/definitions/BodyNotFoundError" },
    description: 'Erro! A requisição falhou! O body com as informações necessárias não foi encontrado.' 
  } */

  /* #swagger.responses[404] = { 
    schema: { $ref: "#/definitions/MotorcycleNotFoundError" },
    description: 'Erro! A requisição falhou! A moto não foi encontrada.' 
  } */

  /* #swagger.responses[422] = { 
    schema: { $ref: "#/definitions/InvalidIdError" },
    description: 'Erro! A requisição falhou! O ID é inválido.' 
  } */
  
  /* #swagger.responses[500] = { 
    schema: { $ref: "#/definitions/InvalidBodyError" },
    description: 'Erro! A requisição falhou! Verifique se as informações do body não estão ausentes ou incorretas.' 
  } */,
);

motorcycleRoutes.delete(
  ROUTE,
  (req: Request, res: Response, next: NextFunction) => new MotorcycleController(req, res, next)
    .delete()
  
  // #swagger.tags = ['Motorcycles']
  // #swagger.summary = 'Deletar uma moto buscando pelo seu ID'
  // #swagger.description = 'Endpoint para deletar uma moto cadastrada no banco de dados buscando pelo seu ID.'

  /* #swagger.parameters['id'] = {
    in: 'path',
    type: 'string',
    required: true,
    description: 'ID necessário para buscar a moto cadastrada no banco de dados.'
  } */

  /* #swagger.responses[204] = { 
    description: 'A requisição para deletar uma moto cadastrada no banco de dados foi efetuada com sucesso.' 
  } */

  /* #swagger.responses[404] = { 
    schema: { $ref: "#/definitions/MotorcycleNotFoundError" },
    description: 'Erro! A requisição falhou! A moto não foi encontrada.' 
  } */

  /* #swagger.responses[422] = { 
    schema: { $ref: "#/definitions/InvalidIdError" },
    description: 'Erro! A requisição falhou! O ID é inválido.' 
  } */,
);

export default motorcycleRoutes;