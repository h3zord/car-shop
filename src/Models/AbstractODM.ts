import { isValidObjectId, model, Model, models, Schema, UpdateQuery } from 'mongoose';

abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;
  private INVALID_ID: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
    this.INVALID_ID = 'Invalid mongo id';
  }

  public async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }

  public async getAll(): Promise<T[]> {
    return this.model.find();
  }

  public async getById(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) throw new Error(this.INVALID_ID);

    return this.model.findById(id);
  }

  public async update(_id: string, newInfo: Partial<T>): Promise<T | null> {
    if (!isValidObjectId(_id)) throw new Error(this.INVALID_ID);
  
    return this.model.findByIdAndUpdate(
      { _id },
      { ...newInfo } as UpdateQuery<T>,
      { new: true },
    );
  }

  public async delete(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) throw new Error(this.INVALID_ID);

    return this.model.findByIdAndDelete(id);
  }
}

export default AbstractODM;