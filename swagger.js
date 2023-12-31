const swaggerAutogen = require('./node_modules/swagger-autogen')();

const doc = {
    info: {
        title: 'My API',
        description: 'Description',
    },
    host: 'sokanred341-project-portfolio.onrender.com',
    schemes: ['https'],
};

// const outputFile = './swagger.json';
const outputFile = './swagger_1.json';
const endpointsFiles = ['./routes/index.js'];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);