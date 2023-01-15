import { NextFunction, Request, Response, Router } from 'express';
import CarController from '../Controllers/CarController';

const carRoutes = Router();

const ROUTE = '/cars/:id';

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
  ROUTE,
  (req: Request, res: Response, next: NextFunction) => new CarController(req, res, next)
    .getById(),
);

carRoutes.put(
  ROUTE,
  (req: Request, res: Response, next: NextFunction) => new CarController(req, res, next)
    .update(),
);

carRoutes.delete(
  ROUTE,
  (req: Request, res: Response, next: NextFunction) => new CarController(req, res, next)
    .delete(),
);

export default carRoutes;