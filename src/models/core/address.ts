import { DataTypes, ModelAttributes } from 'sequelize';
import { BaseModel, ITableConfig } from '../baseModel';

import { User } from './user';

export interface IAddress {
  id: number;
  userId: number;
  lineOne: string;
  lineTwo: string;
}

export class Address extends BaseModel implements IAddress {
  public id: number;
  public userId: number;
  public lineOne: string;
  public lineTwo: string;

  static getAttributes(): ModelAttributes {
    return {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      line_one: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      line_two: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      deleted_at: {
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
    return {};
  }

  static getTableNameConfig(): ITableConfig {
    return {
      schema: 'core',
      tableName: 'address',
    };
  }

  public static initAssociations(): void {
    Address.belongsTo(User, {
      foreignKey: 'userId',
      as: 'user',
    });
  }
}
