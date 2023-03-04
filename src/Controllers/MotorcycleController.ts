import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';
import MotorcycleService from '../Services/MotorcycleService';

class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService(new MotorcycleODM());
  }

  public async create() {    
    const infoMotorcycle: IMotorcycle = this.req.body;

    if (!Object.keys(infoMotorcycle).length) {
      return this.res.status(400).json({ message: 'Body not found' });
    }

    try {
      const newMotorcycle = await this.service.create(infoMotorcycle);

      return this.res.status(201).json(newMotorcycle);
    } catch (error) {
      this.next(error);
    }
  }

  public async getAll() {
    try {
      const motorcycles = await this.service.getAll();

      return this.res.status(200).json(motorcycles);
    } catch (error) {
      this.next(error);
    }
  }

  public async getById() {
    const { id } = this.req.params;

    try {
      const motorcycle = await this.service.getById(id);

      return this.res.status(200).json(motorcycle);
    } catch (error) {
      this.next(error);
    }
  }

  public async update() {
    const { id } = this.req.params;
    const newInfoMotorcycle: Partial<IMotorcycle> = this.req.body;

    if (!Object.keys(newInfoMotorcycle).length) {
      return this.res.status(400).json({ message: 'Body not found' });
    }

    try {
      const updatedMotorcycle = await this.service.update(id, newInfoMotorcycle);

      return this.res.status(200).json(updatedMotorcycle);
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

export default MotorcycleController;