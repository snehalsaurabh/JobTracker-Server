import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Job Tracking API',
      version: '1.0.0',
      description: 'API documentation for the Job Tracking backend service',
    },
    servers: [
      {
        url: 'http://localhost:5000',
        description: 'Development server',
      },
    ],
  },
  apis: ['./src/routes/*.js', './src/components/schemas/*.js'], // Adjust path if your routes are elsewhere
};

const swaggerSpec = swaggerJsdoc(options);
export default swaggerSpec;
