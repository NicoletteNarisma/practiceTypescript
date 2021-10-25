import { BaseModel } from '../models/baseModel';

export class BaseService {
  protected _model: BaseModel | any;

  constructor(model: BaseModel| any) {
    this._model = model;
  }

  public findAndCountAll(paranoid = true): Promise<BaseModel> {
    return this._model.findAndCountAll({
      paranoid,
      limit: 3,
    });
  }

  public findOne(paranoid = true): Promise<BaseModel> {
    return this._model.findOne({
      paranoid,
      raw: true,
    });
  }

  public findByID(primaryKey: number | string, paranoid = true): Promise<BaseModel> {
    return this._model.findByPk(primaryKey, { paranoid });
  }

  public findAll(where: any, include): Promise<BaseModel> {
    return this._model.findAll({
      where,
      include,
      raw: true,
    });
  }
}
