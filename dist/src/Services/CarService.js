"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Car_1 = __importDefault(require("../Domains/Car"));
class CarService {
    constructor(carODM) {
        this.carODM = carODM;
        this.CAR_NOT_FOUND = 'Car not found';
    }
    createCarDomain(car) {
        if (car)
            return new Car_1.default(car);
        return null;
    }
    async create(infoCar) {
        const newCar = await this.carODM.create(infoCar);
        return this.createCarDomain(newCar);
    }
    async getAll() {
        const cars = await this.carODM.getAll();
        const carsList = cars.map((car) => this.createCarDomain(car));
        return carsList;
    }
    async getById(id) {
        const car = await this.carODM.getById(id);
        if (!car)
            throw new Error(this.CAR_NOT_FOUND);
        return this.createCarDomain(car);
    }
    async update(id, newInfoCar) {
        const updatedCar = await this.carODM.update(id, newInfoCar);
        if (!updatedCar)
            throw new Error(this.CAR_NOT_FOUND);
        return this.createCarDomain(updatedCar);
    }
    async delete(id) {
        const deletedCar = await this.carODM.delete(id);
        if (!deletedCar)
            throw new Error(this.CAR_NOT_FOUND);
    }
}
exports.default = CarService;
