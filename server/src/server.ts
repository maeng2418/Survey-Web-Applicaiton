import express from 'express';
import BaseRouter from 'routes';
import dotenv from 'dotenv';
import path from 'path';
import commandLineArgs from 'command-line-args';

// Setup command line options
const options = commandLineArgs([
  {
    name: 'env',
    alias: 'e',
    defaultValue: 'development',
    type: String,
  },
]);

// Set the env file
const result2 = dotenv.config({
  path: path.join(__dirname, `../env/.env.${options.env}`),
});

if (result2.error) {
  throw result2.error;
}

// Init express
const app = express();

// Add APIs
app.use('/api', BaseRouter);

// Export express instance
export default app;
