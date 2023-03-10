import ICar from './ICar';

interface ICarODM {
  create(car: ICar): Promise<ICar>,
  getAll(): Promise<ICar[]>,
  getById(id: string): Promise<ICar | null>,
  update(id: string, newInfoCar: Partial<ICar>): Promise<ICar | null>,
  delete(id: string): Promise<ICar | null>
}

export default ICarODM;