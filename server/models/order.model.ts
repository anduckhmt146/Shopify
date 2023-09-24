import { CreateOrderDto } from '../dto/createOrder.dto';

const useQuery = require('../utils/useQuery');

const getAllOrder = async () => {};

const getOrderById = async (id: string) => {};

const getOrderByCustomer = async (customerId: string) => {};

const confirmOrder = async (id: string) => {};

const createOrder = async (createOrder: CreateOrderDto) => {};

const getChartOrderByMonth = async (id: string) => {};

module.exports = {
  getAllOrder,
  getOrderById,
  getOrderByCustomer,
  confirmOrder,
  createOrder,
  getChartOrderByMonth,
};
