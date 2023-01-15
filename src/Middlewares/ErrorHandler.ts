import { NextFunction, Request, Response } from 'express';

class ErrorHandler {
  public static handle(
    error: Error,
    _req: Request,
    res: Response,
    next: NextFunction,
  ) {
    let STATUS_ERROR;

    if (error.message === 'Car not found') STATUS_ERROR = 404;
    if (error.message === 'Motorcycle not found') STATUS_ERROR = 404;
    if (error.message === 'Invalid mongo id') STATUS_ERROR = 422;

    res.status(STATUS_ERROR || 500).json({ message: error.message });

    next();
  }
}

export default ErrorHandler;