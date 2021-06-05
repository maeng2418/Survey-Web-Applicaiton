import database from './database';
import { databaseConfig } from '../../config/constants';
import bulkData from 'bulk-data';

const dbService = (migrate: boolean) => {
  const authenticateDB = () => database.authenticate();

  const dropDB = () => database.drop();

  const syncDB = () => database.sync();

  const successfulDBStart = () =>
    console.log(
      `connection to the database has been established successfully: ${databaseConfig.host}(${process.env})`
    );

  const successfulMigrate = () => console.log(`success migrating`);

  const errorDBStart = (err: Error) =>
    console.log(
      `unable to connect to the database: ${databaseConfig.host}(${process.env})(${err.message})`
    );

  // 기존의 DB 사용
  const startMigrateTrue = async () => {
    try {
      await syncDB();
      successfulDBStart();
    } catch (err) {
      errorDBStart(err);
      throw err;
    }
  };

  // DB 초기화
  const startMigrateFalse = async () => {
    try {
      await dropDB();
      await syncDB();
      successfulDBStart();
      await bulkData();
      successfulMigrate();
    } catch (err) {
      errorDBStart(err);
      throw err;
    }
  };

  const start = async () => {
    try {
      await authenticateDB();
      console.log(`DB migrate: ${migrate}`);
      if (migrate) {
        return startMigrateTrue();
      }
      return startMigrateFalse();
    } catch (err) {
      return errorDBStart(err);
    }
  };

  return {
    start,
  };
};

export default dbService;
