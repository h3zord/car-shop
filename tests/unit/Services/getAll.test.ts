import { expect } from 'chai';
import Sinon from 'sinon';
import { Model } from 'mongoose';
import ICar from '../../../src/Interfaces/ICar';
import Car from '../../../src/Domains/Car';
import CarService from '../../../src/Services/CarService';
import CarODM from '../../../src/Models/CarODM';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import Motorcycle from '../../../src/Domains/Motorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import MotorcycleODM from '../../../src/Models/MotorcycleODM';

const carsInput: ICar[] = [
  {
    id: '63c1d2974396a6f9eabefb31',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: false,
    buyValue: 15.99,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    id: '63c1df6ed3ee006555ee9d5e',
    model: 'l200',
    year: 2006,
    color: 'Grey',
    status: false,
    buyValue: 29.99,
    doorsQty: 4,
    seatsQty: 5,
  },
];

const motorcyclesInput: IMotorcycle[] = [
  {
    id: '634852326b35b59438fbea2f',
    model: 'Honda Cb 600f Hornet',
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 600,
  },
  {
    id: '634852326b35b59438fbea31',
    model: 'Honda Cbr 1000rr',
    year: 2011,
    color: 'Orange',
    status: true,
    buyValue: 59.900,
    category: 'Street',
    engineCapacity: 1000,
  },
];

describe('Deveria buscar todos os carro e motos', function () {
  it('Deveria buscar todos os carros com sucesso', async function () {
    const carsOutput: Car[] = carsInput.map((car) => new Car(car));

    Sinon.stub(Model, 'find').resolves(carsOutput);

    const service = new CarService(new CarODM());
    const result = await service.getAll();

    expect(result).to.be.deep.equal(carsOutput);
  });

  it('Deveria buscar todos as motos com sucesso', async function () {
    const motorcycleOutput: Motorcycle[] = motorcyclesInput
      .map((motorcycle) => new Motorcycle(motorcycle));

    Sinon.stub(Model, 'find').resolves(motorcycleOutput);

    const service = new MotorcycleService(new MotorcycleODM());
    const result = await service.getAll();

    expect(result).to.be.deep.equal(motorcycleOutput);
  });

  afterEach(function () {
    Sinon.restore();
  });
});