import { Router } from "express";
import { BaseController } from "../controllers/baseController";
import { user } from './userRoute';
import { product } from "./productRoute";

const route = Router();


route.use(user);
route.use(product);

export default route;