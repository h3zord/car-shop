import { expect } from 'chai';
import Sinon from 'sinon';
import { Model } from 'mongoose';
import ICar from '../../../src/Interfaces/ICar';
import Car from '../../../src/Domains/Car';
import CarService from '../../../src/Services/CarService';
import CarODM from '../../../src/Models/CarODM';

describe('Deveria criar um carro', function () {
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
});