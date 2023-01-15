import { expect } from 'chai';
import Sinon from 'sinon';
import { Model } from 'mongoose';
import ICar from '../../../src/Interfaces/ICar';
import Car from '../../../src/Domains/Car';
import CarService from '../../../src/Services/CarService';
import CarODM from '../../../src/Models/CarODM';

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

describe('Deveria buscar todos os carro', function () {
  it('Deveria buscar todos os carros com sucesso', async function () {
    const carsOutput: Car[] = carsInput.map((car) => new Car(car));

    Sinon.stub(Model, 'find').resolves(carsInput);

    const service = new CarService(new CarODM());
    const result = await service.getAll();

    expect(result).to.be.deep.equal(carsOutput);
  });
});