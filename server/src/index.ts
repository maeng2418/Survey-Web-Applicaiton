import app from 'server';
import { dbService } from 'modules/database';

// Start the server
const port = Number(process.env.PORT || 4000);

const server = app.listen(port, () => {
  console.log('start');
});

// DB 연결
try {
  dbService().start();
} catch (e) {
  console.error(`db is failed to start: ${e}`);
}
