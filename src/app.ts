import express from 'express';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from '../swagger-output.json';
import ErrorHandler from './Middlewares/ErrorHandler';
import carRoutes from './Routes/CarRoutes';
import motorcycleRoutes from './Routes/MotorcycleRoutes';

const app = express();
app.use(express.json());
app.use(carRoutes);
app.use(motorcycleRoutes);
app.use(ErrorHandler.handle);
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default app;
