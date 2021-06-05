import app from 'server';

// Start the server
const port = Number(process.env.PORT || 4000);

const server = app.listen(port, () => {
  console.log('start');
});
