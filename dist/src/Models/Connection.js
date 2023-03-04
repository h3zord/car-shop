"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable max-len */
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv/config");
const MONGO_DB_URL = `mongodb://${process.env.MONGOUSER}:${process.env.MONGOPASSWORD}@${process.env.MONGOHOST}:${process.env.MONGOPORT}`;
const connectToDatabase = () => mongoose_1.default.connect(MONGO_DB_URL);
exports.default = connectToDatabase;
