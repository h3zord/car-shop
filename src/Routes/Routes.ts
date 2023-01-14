import { NextFunction, Request, Response, Router } from 'express';
import CarController from '../Controllers/CarController';

const routes = Router();

routes.post(
  '/cars', 
  (req: Request, res: Response, next: NextFunction) => new CarController(req, res, next)
    .create(),
);

routes.get(
  '/cars',
  (req: Request, res: Response, next: NextFunction) => new CarController(req, res, next)
    .getAll(),
);

routes.get(
  '/cars/:id',
  (req: Request, res: Response, next: NextFunction) => new CarController(req, res, next)
    .getById(),
);

routes.put(
  '/cars/:id',
  (req: Request, res: Response, next: NextFunction) => new CarController(req, res, next)
    .update(),
);

export default routes;