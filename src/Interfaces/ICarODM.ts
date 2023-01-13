import ICar from './ICar';

interface ICarODM {
  create(car: ICar): Promise<ICar>
}

export default ICarODM;