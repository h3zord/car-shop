import mongoose, { Schema } from 'mongoose';
import 'dotenv/config';
import ICar from '../Interfaces/ICar';
import IMotorcycle from '../Interfaces/IMotorcycle';

// eslint-disable-next-line max-len
const url = `mongodb://${process.env.MONGOUSER}:${process.env.MONGOPASSWORD}@${process.env.MONGOHOST}:${process.env.MONGOPORT}`;

const carSchema: Schema = new mongoose.Schema({
  model: String,
  year: Number,
  color: String,
  status: Boolean,
  buyValue: Number,
  doorsQty: Number,
  seatsQty: Number,
});

const motorcycleSchema: Schema = new mongoose.Schema({
  model: String,
  year: Number,
  color: String,
  status: Boolean,
  buyValue: Number,
  category: String,
  engineCapacity: Number,
});

const Car = mongoose.model<ICar>('Car', carSchema, 'cars');
const Motorcycle = mongoose.model<IMotorcycle>('Motorcycle', motorcycleSchema, 'motorcycles');

const cars = [
  {
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15990,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    model: 'Gol',
    year: 2020,
    color: 'White',
    status: false,
    buyValue: 25990,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    model: 'Astra',
    year: 2015,
    color: 'Red',
    status: false,
    buyValue: 21500,
    doorsQty: 4,
    seatsQty: 5,
  },
];

const motorcycles = [
  {
    model: 'XRE 300',
    year: 2016,
    color: 'black',
    status: true,
    buyValue: 19000,
    category: 'street',
    engineCapacity: 300,
  },
  {
    model: 'Honda CB 500X',
    year: 2022,
    color: 'white',
    status: false,
    buyValue: 33000,
    category: 'street',
    engineCapacity: 500,
  },
  {
    model: 'Yamaha MT-07',
    year: 2020,
    color: 'blue',
    status: true,
    buyValue: 39000,
    category: 'street',
    engineCapacity: 700,
  },
];

// Conecta ao MongoDB
mongoose.connect(url)
  // eslint-disable-next-line arrow-body-style
  .then(() => Car.create(cars))
  .then(() => Motorcycle.create(motorcycles))
  .then(() => {
    console.log('Dados inseridos com sucesso!');
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    mongoose.disconnect();
  });