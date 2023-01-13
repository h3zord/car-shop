import ICar from './ICar';

interface ICarODM {
  create(car: ICar): Promise<ICar>,
  getAll(): Promise<ICar[]>,
  getById(id: string): Promise<ICar | null>,
}

export default ICarODM;