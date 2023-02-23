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
const INVALID_ID = 'Invalid mongo id';
const CAR_NOT_FOUND = 'Car not found';
const MOTORCYCLE_NOT_FOUND = 'Motorcycle not found';
describe('Deveria buscar um carro e uma moto pelo id', function () {
    const carInput = {
        id: '63c1d2974396a6f9eabefb31',
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: false,
        buyValue: 15.99,
        doorsQty: 4,
        seatsQty: 5,
    };
    const motorcycleInput = {
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
        const carOutput = new Car_1.default(carInput);
        sinon_1.default.stub(mongoose_1.Model, 'findById').resolves(carOutput);
        const service = new CarService_1.default(new CarODM_1.default());
        const result = await service.getById('63c1d2974396a6f9eabefb31');
        (0, chai_1.expect)(result).to.be.deep.equal(carOutput);
    });
    it('Deveria retornar uma mensagem de erro se o id do carro for inválido', async function () {
        try {
            const service = new CarService_1.default(new CarODM_1.default());
            await service.getById('63c1d2974396a6f9eabefb31INVALID');
        }
        catch (error) {
            (0, chai_1.expect)(error.message).to.be.equal(INVALID_ID);
        }
    });
    it('Deveria retornar uma mensagem de erro se não encontar nenhum carro', async function () {
        sinon_1.default.stub(mongoose_1.Model, 'findById').resolves(null);
        try {
            const service = new CarService_1.default(new CarODM_1.default());
            await service.getById('63c1d2974396a6f9eabefb30');
        }
        catch (error) {
            (0, chai_1.expect)(error.message).to.be.equal(CAR_NOT_FOUND);
        }
    });
    it('Deveria buscar uma moto pelo id com sucesso', async function () {
        const motorcycleOutput = new Motorcycle_1.default(motorcycleInput);
        sinon_1.default.stub(mongoose_1.Model, 'findById').resolves(motorcycleOutput);
        const service = new MotorcycleService_1.default(new MotorcycleODM_1.default());
        const result = await service.getById('63c434f076ab18f06d8ad7b7');
        (0, chai_1.expect)(result).to.be.deep.equal(motorcycleOutput);
    });
    it('Deveria retornar uma mensagem de erro se o id da moto for inválido', async function () {
        try {
            const service = new MotorcycleService_1.default(new MotorcycleODM_1.default());
            await service.getById('63c434f076ab18f06d8ad7b7INVALID');
        }
        catch (error) {
            (0, chai_1.expect)(error.message).to.be.equal(INVALID_ID);
        }
    });
    it('Deveria retornar uma mensagem de erro se não encontar nenhuma moto', async function () {
        sinon_1.default.stub(mongoose_1.Model, 'findById').resolves(null);
        try {
            const service = new MotorcycleService_1.default(new MotorcycleODM_1.default());
            await service.getById('63c434f076ab18f06d8ad7b8');
        }
        catch (error) {
            (0, chai_1.expect)(error.message).to.be.equal(MOTORCYCLE_NOT_FOUND);
        }
    });
    afterEach(function () {
        sinon_1.default.restore();
    });
});
