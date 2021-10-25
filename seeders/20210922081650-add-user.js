'use strict';

const tableConfig = {
  schema: "core",
  tableName: "users"
};

module.exports = {
  up: (queryInterface, Sequelize) => {

    const dataProps = [{
      id: 100,
      email: 'tester14@gmail.com',
      username: 'test14',
      deleted_at: new Date(),
      created_at: new Date(),
      updated_at: new Date(),
      created_by: 14,
      deleted_by: 54,
      updated_by: 64
    }];

    return queryInterface.bulkInsert('users', dataProps, tableConfig);
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('users', dataProps, tableConfig);
  }
};
