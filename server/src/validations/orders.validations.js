// ? CREAR LAS VALIDACIONES PARA LAS ORDERS AQUÍ

import { body } from "express-validator";

export const createOrderValidations = [
    body('coffee').isString()
]
