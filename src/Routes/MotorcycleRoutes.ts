import { NextFunction, Request, Response, Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const motorcycleRoutes = Router();

const ROUTE = '/motorcycles/:id';

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
  ROUTE,
  (req: Request, res: Response, next: NextFunction) => new MotorcycleController(req, res, next)
    .getById(),
);

motorcycleRoutes.put(
  ROUTE,
  (req: Request, res: Response, next: NextFunction) => new MotorcycleController(req, res, next)
    .update(),
);

motorcycleRoutes.delete(
  ROUTE,
  (req: Request, res: Response, next: NextFunction) => new MotorcycleController(req, res, next)
    .delete(),
);

export default motorcycleRoutes;