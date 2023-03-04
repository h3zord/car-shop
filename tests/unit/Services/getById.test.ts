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

describe('Deveria buscar um carro e uma moto pelo id', function () {
  const carInput: ICar = {
    id: '63c1d2974396a6f9eabefb31',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: false,
    buyValue: 15.99,
    doorsQty: 4,
    seatsQty: 5,
  };

  const motorcycleInput: IMotorcycle = {
    id: '63c434f076ab18f06d8ad7b7',
    model: 'Honda Cb 600f Hornet',
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 600,
  };

  it('Deveria buscar um carro pelo id com sucesso', async function () {
    const carOutput: Car = new Car(carInput);

    Sinon.stub(Model, 'findById').resolves(carOutput);

    const service = new CarService(new CarODM());
    const result = await service.getById('63c1d2974396a6f9eabefb31');

    expect(result).to.be.deep.equal(carOutput);
  });

  it('Deveria retornar uma mensagem de erro se o id do carro for inválido', async function () {
    try {
      const service = new CarService(new CarODM());
      await service.getById('63c1d2974396a6f9eabefb31INVALID');
    } catch (error) {
      expect((error as Error).message).to.be.equal(INVALID_ID);
    }
  });

  it('Deveria retornar uma mensagem de erro se não encontar nenhum carro', async function () {
    Sinon.stub(Model, 'findById').resolves(null);

    try {
      const service = new CarService(new CarODM());
      await service.getById('63c1d2974396a6f9eabefb30');
    } catch (error) {
      expect((error as Error).message).to.be.equal(CAR_NOT_FOUND);
    }
  });

  it('Deveria buscar uma moto pelo id com sucesso', async function () {
    const motorcycleOutput: Motorcycle = new Motorcycle(motorcycleInput);

    Sinon.stub(Model, 'findById').resolves(motorcycleOutput);

    const service = new MotorcycleService(new MotorcycleODM());
    const result = await service.getById('63c434f076ab18f06d8ad7b7');

    expect(result).to.be.deep.equal(motorcycleOutput);
  });

  it('Deveria retornar uma mensagem de erro se o id da moto for inválido', async function () {
    try {
      const service = new MotorcycleService(new MotorcycleODM());
      await service.getById('63c434f076ab18f06d8ad7b7INVALID');
    } catch (error) {
      expect((error as Error).message).to.be.equal(INVALID_ID);
    }
  });

  it('Deveria retornar uma mensagem de erro se não encontar nenhuma moto', async function () {
    Sinon.stub(Model, 'findById').resolves(null);

    try {
      const service = new MotorcycleService(new MotorcycleODM());
      await service.getById('63c434f076ab18f06d8ad7b8');
    } catch (error) {
      expect((error as Error).message).to.be.equal(MOTORCYCLE_NOT_FOUND);
    }
  });

  afterEach(function () {
    Sinon.restore();
  });
});