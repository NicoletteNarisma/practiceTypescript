import { DataTypes, ModelAttributes } from 'sequelize';
import { BaseModel, ITableConfig } from '../baseModel';

import { Address } from './address';

export interface IUser {
  id?: number;
  email: string;
  username: string;
}

export class User extends BaseModel implements IUser {
  public id: number;
  public email: string;
  public username: string;

  static getAttributes(): ModelAttributes {
    return {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      deleted_by: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      created_by: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      updated_by: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    };
  }

  public static getValidationRules(): any {
    return{};
  }

  static getTableNameConfig(): ITableConfig {
    return {
      schema: 'core',
      tableName: 'users',
    };
  }

  public static initAssociations(): void {

    User.hasMany(Address, {
      foreignKey: 'userId',
      as: 'UserAddress',
    });
  }
}
