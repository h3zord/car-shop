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
describe('Deveria deletar um carro e uma moto pelo id', function () {
    const infoCar = {
        id: '63c1d2974396a6f9eabefb31',
        model: 'Marea',
        year: 1992,
        color: 'Red',
        status: true,
        buyValue: 12.000,
        doorsQty: 2,
        seatsQty: 5,
    };
    const infoMotorcycle = {
        id: '63c434f076ab18f06d8ad7b7',
        model: 'Honda Cb 600f Hornet',
        year: 2005,
        color: 'Red',
        status: true,
        buyValue: 30.000,
        category: 'Street',
        engineCapacity: 600,
    };
    it('Deveria deletar um carro pelo id corretamente', async function () {
        const carOutput = new Car_1.default(infoCar);
        sinon_1.default.stub(mongoose_1.Model, 'findByIdAndDelete').resolves(carOutput);
        const service = new CarService_1.default(new CarODM_1.default());
        const result = await service.delete('63c1d2974396a6f9eabefb31');
        (0, chai_1.expect)(result).to.be.equal(undefined);
    });
    it('Deveria retornar uma mensagem de error se não encontrar nenhum carro', async function () {
        sinon_1.default.stub(mongoose_1.Model, 'findByIdAndDelete').resolves(null);
        try {
            const service = new CarService_1.default(new CarODM_1.default());
            await service.delete('63c1d2974396a6f9eabefb30');
        }
        catch (error) {
            (0, chai_1.expect)(error.message).to.be.equal(CAR_NOT_FOUND);
        }
    });
    it('Deveria retornar uma mensagem de error se o id do carro for inválido', async function () {
        try {
            const service = new CarService_1.default(new CarODM_1.default());
            await service.delete('63c1d2974396a6f9eabefb31INVALID');
        }
        catch (error) {
            (0, chai_1.expect)(error.message).to.be.equal(INVALID_ID);
        }
    });
    it('Deveria deletar uma moto pelo id corretamente', async function () {
        const motorcycleOutput = new Motorcycle_1.default(infoMotorcycle);
        sinon_1.default.stub(mongoose_1.Model, 'findByIdAndDelete').resolves(motorcycleOutput);
        const service = new MotorcycleService_1.default(new MotorcycleODM_1.default());
        const result = await service.delete('63c434f076ab18f06d8ad7b7');
        (0, chai_1.expect)(result).to.be.equal(undefined);
    });
    it('Deveria retornar uma mensagem de error se não encontrar nenhuma moto', async function () {
        sinon_1.default.stub(mongoose_1.Model, 'findByIdAndDelete').resolves(null);
        try {
            const service = new MotorcycleService_1.default(new MotorcycleODM_1.default());
            await service.delete('63c434f076ab18f06d8ad7b6');
        }
        catch (error) {
            (0, chai_1.expect)(error.message).to.be.equal(MOTORCYCLE_NOT_FOUND);
        }
    });
    it('Deveria retornar uma mensagem de error se o id for inválido', async function () {
        try {
            const service = new MotorcycleService_1.default(new MotorcycleODM_1.default());
            await service.delete('63c434f076ab18f06d8ad7b7INVALID');
        }
        catch (error) {
            (0, chai_1.expect)(error.message).to.be.equal(INVALID_ID);
        }
    });
    afterEach(function () {
        sinon_1.default.restore();
    });
});
