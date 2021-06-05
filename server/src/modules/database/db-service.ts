import database from './database';
import { databaseConfig } from 'config/contants';

const dbService = () => {
  const authenticateDB = () => database.authenticate();

  const syncDB = () => database.sync();

  const successfulDBStart = () =>
    console.log(
      `connection to the database has been established successfully: ${databaseConfig.host}(${process.env})`
    );

  const errorDBStart = (err: Error) =>
    console.log(`unable to connect to the database: ${databaseConfig.host}(${process.env})`);

  const start = async () => {
    try {
      await authenticateDB();

      await syncDB();
      successfulDBStart();
    } catch (err) {
      return errorDBStart(err);
    }
  };

  return {
    start,
  };
};

export default dbService;
