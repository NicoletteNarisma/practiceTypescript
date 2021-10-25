'use strict';

const tableConfig = {
  schema: "core",
  tableName: "address"
};

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    const dataProps = [{
       user_id: 2,
       line_one: 'Brgy. San Vicente Poblacion Macrohon, Southern Leyte',
       line_two: 'Apartment 200',
       deleted_at: new Date(),
       created_at: new Date(),
       updated_at: new Date(),
       created_by: 10,
       deleted_by: 20,
       updated_by: 30
    }];

    return queryInterface.bulkInsert('address', dataProps, tableConfig);
  },

  down: (queryInterface) => {
    
    return queryInterface.bulkDelete('address', dataProps, tableConfig);
  }
};
