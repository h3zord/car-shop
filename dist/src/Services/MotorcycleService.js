"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Motorcycle_1 = __importDefault(require("../Domains/Motorcycle"));
class MotorcycleService {
    constructor(motorcycleODM) {
        this.motorcycleODM = motorcycleODM;
        this.MOTORCYCLE_NOT_FOUND = 'Motorcycle not found';
    }
    createMotorcycleDomain(motorcycle) {
        if (motorcycle)
            return new Motorcycle_1.default(motorcycle);
        return null;
    }
    async create(infoMotorcycle) {
        const newMotorcycle = await this.motorcycleODM.create(infoMotorcycle);
        return this.createMotorcycleDomain(newMotorcycle);
    }
    async getAll() {
        const motorcycles = await this.motorcycleODM.getAll();
        const motorcyclesList = motorcycles
            .map((motorcycle) => this.createMotorcycleDomain(motorcycle));
        return motorcyclesList;
    }
    async getById(id) {
        const motorcycle = await this.motorcycleODM.getById(id);
        if (!motorcycle)
            throw new Error(this.MOTORCYCLE_NOT_FOUND);
        return this.createMotorcycleDomain(motorcycle);
    }
    async update(id, newInfoMotorcycle) {
        const updatedMotorcycle = await this.motorcycleODM.update(id, newInfoMotorcycle);
        if (!updatedMotorcycle)
            throw new Error(this.MOTORCYCLE_NOT_FOUND);
        return this.createMotorcycleDomain(updatedMotorcycle);
    }
    async delete(id) {
        const deletedMotorcycle = await this.motorcycleODM.delete(id);
        if (!deletedMotorcycle)
            throw new Error(this.MOTORCYCLE_NOT_FOUND);
    }
}
exports.default = MotorcycleService;
