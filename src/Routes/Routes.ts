import { NextFunction, Request, Response, Router } from 'express';
import CarController from '../Controllers/CarController';

const routes = Router();

routes.post(
  '/cars', 
  (req: Request, res: Response, next: NextFunction) => new CarController(req, res, next)
    .create(),
);

export default routes;