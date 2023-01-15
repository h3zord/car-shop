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
}

export default MotorcycleService;