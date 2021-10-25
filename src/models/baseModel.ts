import { Model, ModelAttributes } from 'sequelize';

export interface ITableConfig {
  schema: string;
  tableName: string;
}

export class BaseModel extends Model {
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public static getAttributes(): ModelAttributes {
    return{};
  }

  public static getValidationRules(): any {
    return{};
  }

  public static getTableNameConfig(): ITableConfig {
    return {
      schema: '',
      tableName: '',
    };
  }

  public static initAssociations(): void {}
}
