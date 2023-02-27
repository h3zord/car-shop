"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MotorcycleODM_1 = __importDefault(require("../Models/MotorcycleODM"));
const MotorcycleService_1 = __importDefault(require("../Services/MotorcycleService"));
class MotorcycleController {
    constructor(req, res, next) {
        this.req = req;
        this.res = res;
        this.next = next;
        this.service = new MotorcycleService_1.default(new MotorcycleODM_1.default());
    }
    async create() {
        const infoMotorcycle = this.req.body;
        if (!Object.keys(infoMotorcycle).length) {
            return this.res.status(400).json({ message: 'Body not found' });
        }
        try {
            const newMotorcycle = await this.service.create(infoMotorcycle);
            return this.res.status(201).json(newMotorcycle);
        }
        catch (error) {
            this.next(error);
        }
    }
    async getAll() {
        try {
            const motorcycles = await this.service.getAll();
            return this.res.status(200).json(motorcycles);
        }
        catch (error) {
            this.next(error);
        }
    }
    async getById() {
        const { id } = this.req.params;
        try {
            const motorcycle = await this.service.getById(id);
            return this.res.status(200).json(motorcycle);
        }
        catch (error) {
            this.next(error);
        }
    }
    async update() {
        const { id } = this.req.params;
        const newInfoMotorcycle = this.req.body;
        if (!Object.keys(newInfoMotorcycle).length) {
            return this.res.status(400).json({ message: 'Body not found' });
        }
        try {
            const updatedMotorcycle = await this.service.update(id, newInfoMotorcycle);
            return this.res.status(200).json(updatedMotorcycle);
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
exports.default = MotorcycleController;
