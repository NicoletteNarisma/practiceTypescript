'use strict';

const tableConfig = {
  schema: "core",
  tableName: "address"
};

module.exports = {
  up: (queryInterface, Sequelize) => {
     const DataTypes = Sequelize;

     const userAddressRelationConfig = {
       schema: "core",
       tableName: "users"
     };

     const tableProps = {
       id: {
         allowNull: false,
         autoIncrement: true,
         primaryKey: true,
         type: DataTypes.INTEGER,
       },
       user_id: {
         allowNull: false,
         type: DataTypes.INTEGER,
         references: {
           model: userAddressRelationConfig,
           key: "id",
         }
       },
       line_one: {
         type: DataTypes.STRING,
         allowNull : false,
       },
       line_two: {
         type: DataTypes.STRING,
         allowNull: false,
       },

       deleted_at: {
         type: DataTypes.DATE,
       },
       created_at: {
         type: DataTypes.DATE,
       },
       updated_at: {
         type: DataTypes.DATE,
       },
       deleted_by: {
         type: DataTypes.INTEGER,
       },
       created_by: {
         type: DataTypes.INTEGER,
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
