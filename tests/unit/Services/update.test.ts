import { expect } from 'chai';
import Sinon from 'sinon';
import { Model } from 'mongoose';
import Car from '../../../src/Domains/Car';
import CarService from '../../../src/Services/CarService';
import CarODM from '../../../src/Models/CarODM';
import ICar from '../../../src/Interfaces/ICar';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import Motorcycle from '../../../src/Domains/Motorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import MotorcycleODM from '../../../src/Models/MotorcycleODM';

const INVALID_ID = 'Invalid mongo id';
const CAR_NOT_FOUND = 'Car not found';
const MOTORCYCLE_NOT_FOUND = 'Motorcycle not found';

describe('Deveria atualizar um carro e uma moto pelo id', function () {
  const newInfoCar: ICar = {
    id: '63c1d2974396a6f9eabefb31',
    model: 'Marea',
    year: 1992,
    color: 'Red',
    status: true,
    buyValue: 12.000,
    doorsQty: 2,
    seatsQty: 5,
  };

  const newInfoMotorcycle: IMotorcycle = {
    id: '63c434f076ab18f06d8ad7b7',
    model: 'Honda Cb 600f Hornet',
    year: 2005,
    color: 'Red',
    status: true,
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 600,
  };

  it('Deveria atualizar um carro pelo id corretamente', async function () {
    const carOutput: Car = new Car(newInfoCar);
    
    Sinon.stub(Model, 'findByIdAndUpdate').resolves(carOutput);

    const service = new CarService(new CarODM());
    const result = await service.update('63c1d2974396a6f9eabefb31', newInfoCar);

    expect(result).to.be.deep.equal(carOutput);
  });

  it('Deveria retornar uma mensagem de error se não encontrar nenhum carro', async function () {
    Sinon.stub(Model, 'findByIdAndUpdate').resolves(null);

    try {
      const service = new CarService(new CarODM());
      await service.update('63c1d2974396a6f9eabefb30', newInfoCar);
    } catch (error) {
      expect((error as Error).message).to.be.equal(CAR_NOT_FOUND);
    }
  });

  it('Deveria retornar uma mensagem de error se o id do carro for inválido', async function () {
    try {
      const service = new CarService(new CarODM());
      await service.update('63c1d2974396a6f9eabefb31INVALID', newInfoCar);
    } catch (error) {
      expect((error as Error).message).to.be.equal(INVALID_ID);
    }
  });

  it('Deveria atualizar uma moto pelo id corretamente', async function () {
    const motorcycleOutput: Motorcycle = new Motorcycle(newInfoMotorcycle);
    
    Sinon.stub(Model, 'findByIdAndUpdate').resolves(motorcycleOutput);

    const service = new MotorcycleService(new MotorcycleODM());
    const result = await service.update('63c434f076ab18f06d8ad7b7', newInfoMotorcycle);

    expect(result).to.be.deep.equal(motorcycleOutput);
  });

  it('Deveria retornar uma mensagem de error se não encontrar nenhuma moto', async function () {
    Sinon.stub(Model, 'findByIdAndUpdate').resolves(null);

    try {
      const service = new MotorcycleService(new MotorcycleODM());
      await service.update('63c434f076ab18f06d8ad7b6', newInfoMotorcycle);
    } catch (error) {
      expect((error as Error).message).to.be.equal(MOTORCYCLE_NOT_FOUND);
    }
  });

  it('Deveria retornar uma mensagem de error se o id for inválido', async function () {
    try {
      const service = new MotorcycleService(new MotorcycleODM());
      await service.update('63c434f076ab18f06d8ad7b7INVALID', newInfoMotorcycle);
    } catch (error) {
      expect((error as Error).message).to.be.equal(INVALID_ID);
    }
  });

  afterEach(function () {
    Sinon.restore();
  });
});