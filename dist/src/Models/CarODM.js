"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const AbstractODM_1 = __importDefault(require("./AbstractODM"));
class CarODM extends AbstractODM_1.default {
    constructor() {
        const schema = new mongoose_1.Schema({
            model: { type: String, required: true },
            year: { type: Number, required: true },
            color: { type: String, required: true },
            status: { type: Boolean, required: false },
            buyValue: { type: Number, required: true },
            doorsQty: { type: Number, required: true },
            seatsQty: { type: Number, required: true },
        });
        super(schema, 'Car');
    }
}
exports.default = CarODM;
