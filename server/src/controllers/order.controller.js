import { conn } from "../database/db.js";

export const createOrderCtrl = async (req, res) => {
  const userId = req.user.id;
  const { coffee } = req.body;

  try {
    const [result] = await conn.query(`INSERT INTO orders (coffee, userId) VALUES (?,?)`, [coffee, userId]);
    res.status(201).json(result);
  } catch (error) {
    console.error('Ocurrio un error')
  }
};

export const getOrdersCtrl = async (_req, res) => {
  try {
    const [result] = await conn.query('SELECT * FROM orders')

  if (result.length === 0) {
    return res.status(404).json({msg: 'No hay ordenes'})
  }

  res.status(200).json(orders);
  } catch (error) {
    console.error('Error al conectarse con la base de datos')
  }
};
