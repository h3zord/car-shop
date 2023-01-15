import { Schema, isValidObjectId } from 'mongoose';
import ICar from '../Interfaces/ICar';
import AbstractODM from './AbstractODM';

class CarODM extends AbstractODM<ICar> {
  constructor() {
    const schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });

    super(schema, 'Car');
  }

  public async getAll(): Promise<ICar[]> {
    const carsList = await this.model.find();

    return carsList;
  }

  public async getById(id: string): Promise<ICar | null> {
    if (!isValidObjectId(id)) throw new Error('Invalid mongo id');

    const car = await this.model.findById(id);
        
    if (!car) throw new Error('Car not found');
  
    return car;
  }

  public async update(_id: string, newInfoCar: Partial<ICar>): Promise<ICar | null> {
    if (!isValidObjectId(_id)) throw new Error('Invalid mongo id');
  
    const updatedCar = await this.model.findByIdAndUpdate(
      { _id },
      { ...newInfoCar },
      { new: true },
    );

    if (!updatedCar) throw new Error('Car not found');

    return updatedCar;
  }
}

export default CarODM;