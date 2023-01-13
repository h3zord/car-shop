import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import ICarODM from '../Interfaces/ICarODM';

class CarService {
  constructor(
    private carODM: ICarODM,
  ) {}

  private createCarDomain(newCar: ICar | null): Car | null {
    if (newCar) return new Car(newCar);
    return null;
  }

  public async create(infoCar: ICar) {
    const newCar = await this.carODM.create(infoCar);
    return this.createCarDomain(newCar);
  }
}

export default CarService;