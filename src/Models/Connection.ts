/* eslint-disable max-len */
import mongoose from 'mongoose';
import 'dotenv/config';

// const MONGO_DB_URL = `mongodb://${process.env.MONGOUSER}:${process.env.MONGOPASSWORD}@${process.env.MONGOHOST}:${process.env.MONGOPORT}`;
const MONGO_DB_URL = process.env.MONGO_URL as string;

const connectToDatabase = () => mongoose.connect(MONGO_DB_URL);

export default connectToDatabase;