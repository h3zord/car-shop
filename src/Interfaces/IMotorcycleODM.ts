import IMotorcycle from './IMotorcycle';

interface IMotorcycleODM {
  create(car: IMotorcycle): Promise<IMotorcycle>,
  getAll(): Promise<IMotorcycle[]>,
  getById(id: string): Promise<IMotorcycle | null>,
  // update(id: string, newInfoMotorcycle: Partial<IMotorcycle>): Promise<IMotorcycle | null>,
}

export default IMotorcycleODM;