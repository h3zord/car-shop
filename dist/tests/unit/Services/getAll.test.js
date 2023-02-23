"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const sinon_1 = __importDefault(require("sinon"));
const mongoose_1 = require("mongoose");
const Car_1 = __importDefault(require("../../../src/Domains/Car"));
const CarService_1 = __importDefault(require("../../../src/Services/CarService"));
const CarODM_1 = __importDefault(require("../../../src/Models/CarODM"));
const Motorcycle_1 = __importDefault(require("../../../src/Domains/Motorcycle"));
const MotorcycleService_1 = __importDefault(require("../../../src/Services/MotorcycleService"));
const MotorcycleODM_1 = __importDefault(require("../../../src/Models/MotorcycleODM"));
const carsInput = [
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
const motorcyclesInput = [
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
        const carsOutput = carsInput.map((car) => new Car_1.default(car));
        sinon_1.default.stub(mongoose_1.Model, 'find').resolves(carsOutput);
        const service = new CarService_1.default(new CarODM_1.default());
        const result = await service.getAll();
        (0, chai_1.expect)(result).to.be.deep.equal(carsOutput);
    });
    it('Deveria buscar todos as motos com sucesso', async function () {
        const motorcycleOutput = motorcyclesInput
            .map((motorcycle) => new Motorcycle_1.default(motorcycle));
        sinon_1.default.stub(mongoose_1.Model, 'find').resolves(motorcycleOutput);
        const service = new MotorcycleService_1.default(new MotorcycleODM_1.default());
        const result = await service.getAll();
        (0, chai_1.expect)(result).to.be.deep.equal(motorcycleOutput);
    });
    afterEach(function () {
        sinon_1.default.restore();
    });
});
