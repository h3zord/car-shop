import { NextFunction, Request, Response, Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const motorcycleRoutes = Router();

motorcycleRoutes.post(
  '/motorcycles', 
  (req: Request, res: Response, next: NextFunction) => new MotorcycleController(req, res, next)
    .create(),
);

motorcycleRoutes.get(
  '/motorcycles',
  (req: Request, res: Response, next: NextFunction) => new MotorcycleController(req, res, next)
    .getAll(),
);

motorcycleRoutes.get(
  '/motorcycles/:id',
  (req: Request, res: Response, next: NextFunction) => new MotorcycleController(req, res, next)
    .getById(),
);

export default motorcycleRoutes;