import { expect } from 'chai';
import Sinon from 'sinon';
import { Model } from 'mongoose';
import ICar from '../../../src/Interfaces/ICar';
import Car from '../../../src/Domains/Car';
import CarService from '../../../src/Services/CarService';
import CarODM from '../../../src/Models/CarODM';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import Motorcycle from '../../../src/Domains/Motorcycle';
import MotorcycleODM from '../../../src/Models/MotorcycleODM';
import MotorcycleService from '../../../src/Services/MotorcycleService';

describe('Deveria criar um carro e uma moto', function () {
  it('Deveria criar um carro com sucesso', async function () {
    const infoCar: ICar = {
      model: 'Marea',
      year: 2002,
      color: 'Black',
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };

    const carOutput: Car = new Car(infoCar);

    Sinon.stub(Model, 'create').resolves(carOutput);

    const service = new CarService(new CarODM());
    const result = await service.create(infoCar);

    expect(result).to.be.deep.equal(carOutput);
  });

  it('Deveria criar uma moto com sucesso', async function () {
    const infoMotorcycle: IMotorcycle = {
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };

    const motorcycleOutput: Motorcycle = new Motorcycle(infoMotorcycle);

    Sinon.stub(Model, 'create').resolves(motorcycleOutput);

    const service = new MotorcycleService(new MotorcycleODM());
    const result = await service.create(infoMotorcycle);

    expect(result).to.be.deep.equal(motorcycleOutput);
  });

  afterEach(function () {
    Sinon.restore();
  });
});