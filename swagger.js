// eslint-disable-next-line @typescript-eslint/no-var-requires
const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    version: '1.0.0',
    title: 'Car Shop API',
    description: 'Esta documentação é destinada ao projeto Car Shop.',
  },
  host: 'car-shop.up.railway.app',
  basePath: '/',
  schemes: ['https', 'http'],
  consumes: ['application/json'],
  produces: ['application/json'],
  tags: [
    {
      name: 'Cars',
      description: 'Endpoints',
    },
    {
      name: 'Motorcycles',
      description: 'Endpoints',
    },
  ],
  definitions: {
    Car: {
      $model: 'Reno Clio',
      $year: 2008,
      $color: 'White',
      status: true,
      $buyValue: 10000,
      $doorsQty: 4,
      $seatsQty: 5,
    },
    CarList: [
      {
        $model: 'Reno Clio',
        $year: 2008,
        $color: 'White',
        status: true,
        $buyValue: 10000,
        $doorsQty: 4,
        $seatsQty: 5,
      },
    ],
    Motorcycle: {
      $model: 'Honda CG Titan 125',
      $year: 2005,
      $color: 'Black',
      status: true,
      $buyValue: 6500,
      $category: {
        '@enum': ['Street', 'Custom', 'Trail'],
      },
      $engineCapacity: 125,
    },
    MotorcycleList: [
      {
        $model: 'Honda CG Titan 125',
        $year: 2005,
        $color: 'Black',
        status: true,
        $buyValue: 6500,
        $category: {
          '@enum': ['Street', 'Custom', 'Trail'],
        },
        $engineCapacity: 125,
      },
    ],
    InvalidBodyError: {
      message: 'Invalid body',
    },
    BodyNotFoundError: {
      message: 'Body not found',
    },
    InvalidIdError: {
      message: 'Invalid mongo id',
    },
    CarNotFoundError: {
      message: 'Car not found',
    },
    MotorcycleNotFoundError: {
      message: 'Motorcycle not found',
    },
  },
};

const outputFile = './src/swagger-output.json';
const endpointsFiles = [
  './dist/src/Routes/CarRoutes.js',
  './dist/src/Routes/MotorcycleRoutes.js',
];

swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
  // eslint-disable-next-line import/extensions
  await import('./dist/src/app.js'); // Your project's root file
});