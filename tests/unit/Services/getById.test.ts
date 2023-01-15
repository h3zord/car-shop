import { expect } from 'chai';
import Sinon from 'sinon';
import { Model } from 'mongoose';
import Car from '../../../src/Domains/Car';
import CarService from '../../../src/Services/CarService';
import CarODM from '../../../src/Models/CarODM';
import ICar from '../../../src/Interfaces/ICar';

const INVALID_ID = 'Invalid mongo id';
const CAR_NOT_FOUND = 'Car not found';

describe('Deveria buscar um carro pelo id', function () {
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

  it('Deveria buscar um carro pelo id com sucesso', async function () {
    const carOutput: Car = new Car(carInput);

    Sinon.stub(Model, 'findById').resolves(carInput);

    const services = new CarService(new CarODM());
    const result = await services.getById('63c1d2974396a6f9eabefb31');

    expect(result).to.be.deep.equal(carOutput);
  });

  it('Deveria retornar uma mensagem de erro se o id for inválido', async function () {
    try {
      const services = new CarService(new CarODM());
      await services.getById('63c1d2974396a6f9eabefb31INVALID');
    } catch (error) {
      expect((error as Error).message).to.be.equal(INVALID_ID);
    }
  });

  it('Deveria retornar uma mensagem de erro se não encontar nenhum carro', async function () {
    Sinon.stub(Model, 'findById').resolves(null);

    try {
      const services = new CarService(new CarODM());
      await services.getById('63c1d2974396a6f9eabefb30');
    } catch (error) {
      expect((error as Error).message).to.be.equal(CAR_NOT_FOUND);
    }
  });

  afterEach(function () {
    Sinon.restore();
  });
});