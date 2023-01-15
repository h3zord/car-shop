import { expect } from 'chai';
import Sinon from 'sinon';
import { Model } from 'mongoose';
import Car from '../../../src/Domains/Car';
import CarService from '../../../src/Services/CarService';
import CarODM from '../../../src/Models/CarODM';
import ICar from '../../../src/Interfaces/ICar';

const INVALID_ID = 'Invalid mongo id';
const CAR_NOT_FOUND = 'Car not found';

describe('Deveria atualizar um carro pelo id', function () {
  const newInfoCar: ICar = {
    model: 'Marea',
    year: 1992,
    color: 'Red',
    status: true,
    buyValue: 12.000,
    doorsQty: 2,
    seatsQty: 5,
  };

  it('Deveria atualizar um carro pelo id corretamente', async function () {
    const carOutput: Car = new Car(newInfoCar);
    
    Sinon.stub(Model, 'findByIdAndUpdate').resolves(carOutput);

    const services = new CarService(new CarODM());
    const result = await services.update('63c1d2974396a6f9eabefb31', newInfoCar);

    expect(result).to.be.deep.equal(result);
  });

  it('Deveria retornar uma mensagem de error se não encontrar nenhum carro', async function () {
    Sinon.stub(Model, 'findByIdAndUpdate').resolves(null);

    try {
      const services = new CarService(new CarODM());
      await services.update('63c1d2974396a6f9eabefb30', newInfoCar);
    } catch (error) {
      expect((error as Error).message).to.be.equal(CAR_NOT_FOUND);
    }
  });

  it('Deveria retornar uma mensagem de error se o id for inválido', async function () {
    try {
      const service = new CarService(new CarODM());
      await service.update('63c20a52a5e7e11e846a765g', newInfoCar);
    } catch (error) {
      expect((error as Error).message).to.be.equal(INVALID_ID);
    }
  });

  afterEach(function () {
    Sinon.restore();
  });
});