import { Router } from "express";
import {
  createOrderCtrl,
  getOrdersCtrl
} from "../controllers/order.controller.js";
import { applyValidations } from "../validations/apply.validations.js";
import { createOrderValidations } from "../validations/orders.validations.js";

const ordersRouter = Router();

// ! NO FUNCIONA LA RUTA /orders
ordersRouter.get("/", getOrdersCtrl);

ordersRouter.post("/", createOrderCtrl, createOrderValidations, applyValidations);

export { ordersRouter };
