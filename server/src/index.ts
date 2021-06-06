import './load-env'; // Must be the first import
import http from 'http';
import app from 'server';
import { dbService } from 'modules/database';
import { migrate } from 'config/constants';

// Start the server
const port = Number(process.env.PORT || 3000);

// 서버 중단시키기
const stopServer = async (server: http.Server, signal?: string) => {
  console.log(`Stopping server with signal: ${signal}`);
  await server.close();
  process.exit();
};

const server = app.listen(port, () => {
  console.log('Express server started on port: ' + port);
});

// DB 연결
try {
  dbService(migrate).start();
} catch (e) {
  stopServer(server, `db is failed to start: ${e}`);
}
