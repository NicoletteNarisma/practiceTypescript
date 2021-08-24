import { BaseService } from "../services/baseService";

export class BaseController {
    protected service: BaseService;
    constructor(service: BaseService) {
        this.service = service;
    }
   public browse() {
       this.service.getData();
   }
}