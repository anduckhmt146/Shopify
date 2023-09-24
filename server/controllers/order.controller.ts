const { StatusCodes } = require('http-status-codes');
const {
  getAllOrder,
  getOrderById,
  getOrderByCustomer,
  confirmOrder,
  createOrder,
  getChartOrderByMonth,
} = require('../models/order.model');

const GetAllOrder = async (req: any, res: any) => {};

const GetOrderById = async (req: any, res: any) => {};

const GetOrderByCustomer = async (req: any, res: any) => {};

const ConfirmOrder = async (req: any, res: any) => {};

const CreateOrder = async (req: any, res: any) => {};

const GetChartOrderByMonth = async (req: any, res: any) => {};

module.exports = {
  GetAllOrder,
  GetOrderById,
  GetOrderByCustomer,
  ConfirmOrder,
  CreateOrder,
  GetChartOrderByMonth,
};
