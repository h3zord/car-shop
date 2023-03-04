import IVehicle from './IVehicle';
// import MotorcycleCategory from '../Utils/MotorcycleCategory';

interface IMotorcycle extends IVehicle{
  category: string,
  engineCapacity: number,
}

export default IMotorcycle;