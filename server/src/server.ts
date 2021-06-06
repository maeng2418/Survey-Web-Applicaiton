import express from 'express';
import BaseRouter from 'routes';

// Init express
const app = express();

// Add APIs
app.use('/api', BaseRouter);

// Export express instance
export default app;
