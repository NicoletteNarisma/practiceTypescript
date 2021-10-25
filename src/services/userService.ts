import { BaseService } from './baseService';
import { User } from '../../src/models/core';

export class UserService extends BaseService {

  constructor() {
    super(User);
  }
}


// export class UserService extends BaseService {
//  public users = (modelData: any): any => {
//    const users = User.findAll({
//      where: {
//        id: 1,
//      },
//    });
//    return(users);
//  }
// }
