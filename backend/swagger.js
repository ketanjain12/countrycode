const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'My API',
        description: 'API Documentation',
    },
    host: 'localhost:5000',
    schemes: ['http'], // Use 'https' if you're using HTTPS
};

const outputFile = './swagger-output.json'; // Path for generated Swagger JSON
const routes = ['./index.js']; // Main entry file

swaggerAutogen(outputFile, routes, doc).then(() => {
    console.log('Swagger documentation generated successfully!');
});
