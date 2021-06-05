import express from 'express';

// Init express
const app = express();

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('start');
});

// Export express instance
export default app;
