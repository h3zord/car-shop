import { NextFunction, Request, Response, Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const MotorcycleRoutes = Router();

MotorcycleRoutes.post(
  '/motorcycles', 
  (req: Request, res: Response, next: NextFunction) => new MotorcycleController(req, res, next)
    .create(),
);

export default MotorcycleRoutes;