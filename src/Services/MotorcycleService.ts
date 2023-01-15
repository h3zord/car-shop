import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import IMotorcycleODM from '../Interfaces/IMotorcycleODM';

class MotorcycleService {
  constructor(
    private motorcycleODM: IMotorcycleODM,
  ) {}

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

    if (!motorcycle) throw new Error('Motorcycle not found');

    return this.createMotorcycleDomain(motorcycle);
  }

  public async update(id: string, newInfoMotorcycle: Partial<IMotorcycle>) {
    const updatedMotorcycle = await this.motorcycleODM.update(id, newInfoMotorcycle);

    if (!updatedMotorcycle) throw new Error('Motorcycle not found');

    return this.createMotorcycleDomain(updatedMotorcycle);
  }
}

export default MotorcycleService;