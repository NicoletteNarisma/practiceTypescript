'use strict';

const tableConfig = {
  schema: "core",
  tableName: "users"
};

module.exports = {
  up: (queryInterface, Sequelize) => {
     const DataTypes = Sequelize;

     const tableProps = {
       id: {
         allowNull: false,
         autoIncrement: true,
         primaryKey: true,
         type: DataTypes.INTEGER
       },
       email: {
         type: DataTypes.STRING,
         allowNull: false
       },
       username: {
         type: DataTypes.STRING,
         allowNull: false
       },
       deleted_at: {
         type: DataTypes.DATE,
       },
       created_at: {
         type: DataTypes.DATE,
       },
       updated_at: {
         type: DataTypes.DATE
       },
       deleted_by: {
         type: DataTypes.INTEGER
       },
       created_by: {
         type: DataTypes.INTEGER
       },
       updated_by: {
         type: DataTypes.INTEGER
       }
     };

     return queryInterface.createTable(tableConfig, tableProps);
  },

  down: (queryInterface) => {
    
    return queryInterface.dropTable(tableConfig);
  }
};
