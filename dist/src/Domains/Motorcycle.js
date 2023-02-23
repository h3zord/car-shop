"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Vehicle_1 = __importDefault(require("./Vehicle"));
// import MotorcycleCategory from '../Utils/MotorcycleCategory';
class Motorcycle extends Vehicle_1.default {
    constructor({ id, model, year, color, status, buyValue, category, engineCapacity, }) {
        super({ id, model, year, color, status, buyValue });
        this.category = category;
        this.engineCapacity = engineCapacity;
    }
}
exports.default = Motorcycle;
