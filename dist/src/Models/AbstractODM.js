"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
class AbstractODM {
    constructor(schema, modelName) {
        this.schema = schema;
        this.modelName = modelName;
        this.model = mongoose_1.models[this.modelName] || (0, mongoose_1.model)(this.modelName, this.schema);
        this.INVALID_ID = 'Invalid mongo id';
    }
    async create(obj) {
        return this.model.create({ ...obj });
    }
    async getAll() {
        return this.model.find();
    }
    async getById(id) {
        if (!(0, mongoose_1.isValidObjectId)(id))
            throw new Error(this.INVALID_ID);
        return this.model.findById(id);
    }
    async update(_id, newInfo) {
        if (!(0, mongoose_1.isValidObjectId)(_id))
            throw new Error(this.INVALID_ID);
        return this.model.findByIdAndUpdate({ _id }, { ...newInfo }, { new: true });
    }
    async delete(id) {
        if (!(0, mongoose_1.isValidObjectId)(id))
            throw new Error(this.INVALID_ID);
        return this.model.findByIdAndDelete(id);
    }
}
exports.default = AbstractODM;
