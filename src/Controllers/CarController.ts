import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import CarService from '../Services/CarService';

class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService(new CarODM());
  }

  public async create() {
    const infoCar: ICar = this.req.body;

    if (!Object.keys(infoCar).length) {
      return this.res.status(400).json({ message: 'Body not found' });
    }

    try {
      const newCar = await this.service.create(infoCar);
  
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async getAll() {
    try {
      const cars = await this.service.getAll();

      return this.res.status(200).json(cars);
    } catch (error) {
      this.next(error);
    }
  }

  public async getById() {
    const { id } = this.req.params;

    try {
      const car = await this.service.getById(id);

      return this.res.status(200).json(car);
    } catch (error) {
      this.next(error);
    }
  }

  public async update() {
    const { id } = this.req.params;
    const newInfoCar: Partial<ICar> = this.req.body;

    if (!Object.keys(newInfoCar).length) {
      return this.res.status(400).json({ message: 'Body not found' });
    }

    try {
      const updatedCar = await this.service.update(id, newInfoCar);

      return this.res.status(200).json(updatedCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async delete() {
    const { id } = this.req.params;

    try {
      await this.service.delete(id);

      return this.res.status(204).end();
    } catch (error) {
      this.next(error);
    }
  }
}

export default CarController;