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
const MotorcycleODM_1 = __importDefault(require("../../../src/Models/MotorcycleODM"));
const MotorcycleService_1 = __importDefault(require("../../../src/Services/MotorcycleService"));
describe('Deveria criar um carro e uma moto', function () {
    it('Deveria criar um carro com sucesso', async function () {
        const infoCar = {
            model: 'Marea',
            year: 2002,
            color: 'Black',
            buyValue: 15.990,
            doorsQty: 4,
            seatsQty: 5,
        };
        const carOutput = new Car_1.default(infoCar);
        sinon_1.default.stub(mongoose_1.Model, 'create').resolves(carOutput);
        const service = new CarService_1.default(new CarODM_1.default());
        const result = await service.create(infoCar);
        (0, chai_1.expect)(result).to.be.deep.equal(carOutput);
    });
    it('Deveria criar uma moto com sucesso', async function () {
        const infoMotorcycle = {
            model: 'Honda Cb 600f Hornet',
            year: 2005,
            color: 'Yellow',
            status: true,
            buyValue: 30.000,
            category: 'Street',
            engineCapacity: 600,
        };
        const motorcycleOutput = new Motorcycle_1.default(infoMotorcycle);
        sinon_1.default.stub(mongoose_1.Model, 'create').resolves(motorcycleOutput);
        const service = new MotorcycleService_1.default(new MotorcycleODM_1.default());
        const result = await service.create(infoMotorcycle);
        (0, chai_1.expect)(result).to.be.deep.equal(motorcycleOutput);
    });
    afterEach(function () {
        sinon_1.default.restore();
    });
});
