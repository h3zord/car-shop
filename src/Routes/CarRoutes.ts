import { NextFunction, Request, Response, Router } from 'express';
import CarController from '../Controllers/CarController';

const CarRoutes = Router();

CarRoutes.post(
  '/cars', 
  (req: Request, res: Response, next: NextFunction) => new CarController(req, res, next)
    .create(),
);

CarRoutes.get(
  '/cars',
  (req: Request, res: Response, next: NextFunction) => new CarController(req, res, next)
    .getAll(),
);

CarRoutes.get(
  '/cars/:id',
  (req: Request, res: Response, next: NextFunction) => new CarController(req, res, next)
    .getById(),
);

CarRoutes.put(
  '/cars/:id',
  (req: Request, res: Response, next: NextFunction) => new CarController(req, res, next)
    .update(),
);

export default CarRoutes;