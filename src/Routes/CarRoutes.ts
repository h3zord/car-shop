import { NextFunction, Request, Response, Router } from 'express';
import CarController from '../Controllers/CarController';

const carRoutes = Router();

carRoutes.post(
  '/cars', 
  (req: Request, res: Response, next: NextFunction) => new CarController(req, res, next)
    .create(),
);

carRoutes.get(
  '/cars',
  (req: Request, res: Response, next: NextFunction) => new CarController(req, res, next)
    .getAll(),
);

carRoutes.get(
  '/cars/:id',
  (req: Request, res: Response, next: NextFunction) => new CarController(req, res, next)
    .getById(),
);

carRoutes.put(
  '/cars/:id',
  (req: Request, res: Response, next: NextFunction) => new CarController(req, res, next)
    .update(),
);

export default carRoutes;