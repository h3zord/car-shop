import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import ICarODM from '../Interfaces/ICarODM';

class CarService {
  constructor(
    private carODM: ICarODM,
  ) {}

  private createCarDomain(car: ICar | null): Car | null {    
    if (car) return new Car(car);
  
    return null;
  }

  public async create(infoCar: ICar) {
    const newCar = await this.carODM.create(infoCar);
    
    return this.createCarDomain(newCar);
  }

  public async getAll() {
    const cars = await this.carODM.getAll();
    
    const carsList = cars.map((car) => this.createCarDomain(car));
  
    return carsList;
  }

  public async getById(id: string) {
    const car = await this.carODM.getById(id);

    if (!car) throw new Error('Car not found');
    
    return this.createCarDomain(car);
  }

  public async update(id: string, newInfoCar: Partial<ICar>) {
    const updatedCar = await this.carODM.update(id, newInfoCar);

    if (!updatedCar) throw new Error('Car not found');

    return this.createCarDomain(updatedCar);
  }
}

export default CarService;