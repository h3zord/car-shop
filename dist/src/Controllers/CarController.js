"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CarODM_1 = __importDefault(require("../Models/CarODM"));
const CarService_1 = __importDefault(require("../Services/CarService"));
class CarController {
    constructor(req, res, next) {
        this.req = req;
        this.res = res;
        this.next = next;
        this.service = new CarService_1.default(new CarODM_1.default());
    }
    async create() {
        const infoCar = this.req.body;
        if (!Object.keys(infoCar).length) {
            return this.res.status(400).json({ message: 'Body not found' });
        }
        try {
            const newCar = await this.service.create(infoCar);
            return this.res.status(201).json(newCar);
        }
        catch (error) {
            this.next(error);
        }
    }
    async getAll() {
        try {
            const cars = await this.service.getAll();
            return this.res.status(200).json(cars);
        }
        catch (error) {
            this.next(error);
        }
    }
    async getById() {
        const { id } = this.req.params;
        try {
            const car = await this.service.getById(id);
            return this.res.status(200).json(car);
        }
        catch (error) {
            this.next(error);
        }
    }
    async update() {
        const { id } = this.req.params;
        const newInfoCar = this.req.body;
        if (!Object.keys(newInfoCar).length) {
            return this.res.status(400).json({ message: 'Body not found' });
        }
        try {
            const updatedCar = await this.service.update(id, newInfoCar);
            return this.res.status(200).json(updatedCar);
        }
        catch (error) {
            this.next(error);
        }
    }
    async delete() {
        const { id } = this.req.params;
        try {
            await this.service.delete(id);
            return this.res.status(204).end();
        }
        catch (error) {
            this.next(error);
        }
    }
}
exports.default = CarController;
