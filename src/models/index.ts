import { Sequelize } from 'sequelize';
import { config } from '../config/config';

import * as CodeModels from './core';

export const sequelize = new Sequelize(
  config.database,
  config.user,
  config.password,
  {
    dialect: 'postgres',
    host: config.host,
    port: config.dbport,
    logging: false,
  },
);

export const initModels = async () => {
  const models = { ...CodeModels };

  Object.keys(models).forEach(async (key) => {
    const model = models[key];
    const tableNameConfig = model.getTableNameConfig();

    const initParams = {
      ...tableNameConfig,
      sequelize,
      timestamps: true,
      underscored: true,
    };

    await model.init(model.getAttributes(), initParams);
  });

  Object.keys(models).forEach((key) => {
    const model = models[key];
    model.initAssociations();
  });
};
