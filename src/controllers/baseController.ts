import { BaseService } from '../services/baseService';
import { BaseModel } from '../models/baseModel';
import { request, response } from 'express';

import * as dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export class BaseController {
  protected service: BaseService;
  protected hasBrowse: true;
  protected hasRead: true;

  constructor(service: BaseService) {
    this.service = service;
  }

  public browse = async (ctx, response) => {
    if (!this.hasBrowse) {
     // ctx.throw(404);
    }

    try {
      const findAndCountAllQuery = await this.service.findAndCountAll();
      response.send(findAndCountAllQuery);
    } catch (err) {
      console.log('err');
    }
  };

  public read = async (ctx, response) => {
    if (!this.hasRead) {
      ctx.throw(404);
    }

    try {
      const paranoid = ctx.query.paranoid === '1' ? false : true;
      const findByIDQuery = await this.service.findByID(ctx.params.id, paranoid);

      if (findByIDQuery) {
        request.query.id;
      } else {
        console.log('not found');
      }
      response.send(findByIDQuery);
    } catch (err) {
      console.log(err);
    }
  }

}
