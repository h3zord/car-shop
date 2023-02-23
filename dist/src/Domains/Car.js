"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Vehicle_1 = __importDefault(require("./Vehicle"));
class Car extends Vehicle_1.default {
    constructor({ id, model, year, color, status, buyValue, doorsQty, seatsQty, }) {
        super({ id, model, year, color, status, buyValue });
        this.doorsQty = doorsQty;
        this.seatsQty = seatsQty;
    }
}
exports.default = Car;
