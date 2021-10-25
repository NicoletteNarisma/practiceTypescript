"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initModels = exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const config_1 = require("../src/config/config");
const CodeModels = require("../src/models/core");
exports.sequelize = new sequelize_1.Sequelize(config_1.config.database, config_1.config.user, config_1.config.password,{
    dialect: 'postgres',
    host: config_1.config.host,
    port: config_1.config.dbport,
    logging: false,
    dialectOptions: { supportBigNumbers: true },
});
exports.initModels = async () => {
    const models = Object.assign(Object.assign({}, CodeModels));
    
    Object.keys(models).forEach(async (key) => {
        const model = models[key];
        const tableNameConfig = model.getTableNameConfig();
        const initParams = Object.assign(Object.assign({}, tableNameConfig), { sequelize: exports.sequelize, timestamps: true, underscored: true });
        await model.init(model.getAttributes(), initParams);
    });
    
    Object.keys(models).forEach((key) => {
        const model = models[key];
        model.initAssociations();
    });
};
