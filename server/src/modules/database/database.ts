import { Sequelize } from 'sequelize';
import { connection } from './connection';

const sequelize = new Sequelize(connection.database, connection.username, connection.password, {
  host: connection.host,
  dialect: 'mysql',
  define: {
    charset: 'utf8',
  },
  pool: {
    max: connection.max,
    min: connection.min,
    idle: connection.idle,
  },
  logging: process.env.NODE_ENV !== 'production' ? (msg) => console.log(msg) : false,
});

export default sequelize;
