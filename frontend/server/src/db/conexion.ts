import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('almacen', 'postgres', 'admin5', {
    host: 'localhost',
    dialect: 'postgres'
  });

  export default sequelize;