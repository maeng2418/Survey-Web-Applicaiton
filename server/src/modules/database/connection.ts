import { databaseConfig } from 'config/contants';

const connection = {
  ...databaseConfig,
  dialect: 'mysql',
  max: 5,
  min: 0,
  idle: 10000,
};

export { connection };
