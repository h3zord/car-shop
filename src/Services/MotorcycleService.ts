import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import IMotorcycleODM from '../Interfaces/IMotorcycleODM';

class MotorcycleService {
  private motorcycleODM: IMotorcycleODM;
  private MOTORCYCLE_NOT_FOUND: string;

  constructor(motorcycleODM: IMotorcycleODM) {
    this.motorcycleODM = motorcycleODM;
    this.MOTORCYCLE_NOT_FOUND = 'Motorcycle not found';
  }

  private createMotorcycleDomain(motorcycle: IMotorcycle | null): Motorcycle | null {
    if (motorcycle) return new Motorcycle(motorcycle);

    return null;
  }

  public async create(infoMotorcycle: IMotorcycle) {
    const newMotorcycle = await this.motorcycleODM.create(infoMotorcycle);

    return this.createMotorcycleDomain(newMotorcycle);
  }

  public async getAll() {
    const motorcycles = await this.motorcycleODM.getAll();

    const motorcyclesList = motorcycles
      .map((motorcycle) => this.createMotorcycleDomain(motorcycle));

    return motorcyclesList;
  }

  public async getById(id: string) {
    const motorcycle = await this.motorcycleODM.getById(id);

    if (!motorcycle) throw new Error(this.MOTORCYCLE_NOT_FOUND);

    return this.createMotorcycleDomain(motorcycle);
  }

  public async update(id: string, newInfoMotorcycle: Partial<IMotorcycle>) {
    const updatedMotorcycle = await this.motorcycleODM.update(id, newInfoMotorcycle);

    if (!updatedMotorcycle) throw new Error(this.MOTORCYCLE_NOT_FOUND);

    return this.createMotorcycleDomain(updatedMotorcycle);
  }

  public async delete(id: string) {
    const deletedMotorcycle = await this.motorcycleODM.delete(id);
    
    if (!deletedMotorcycle) throw new Error(this.MOTORCYCLE_NOT_FOUND);
  }
}

export default MotorcycleService;