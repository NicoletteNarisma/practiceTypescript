import { BaseController } from "./baseController";
import { UserService } from "../services/userService";

export class UserController extends BaseController  {
    constructor() {
        super(new UserService) 
            
    }
}