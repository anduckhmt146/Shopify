const { StatusCodes } = require('http-status-codes');
const {
  getAllOrder,
  getOrderById,
  getOrderByCustomer,
  confirmOrder,
  createOrder,
  getChartOrderByMonth,
} = require('../models/order.model');

const {
  NotFoundError,
  UnauthenticatedError,
} = require('../utils/errorHandler');

const GetAllOrder = async (req: any, res: any) => {
  const data = await getAllOrder();
  return res.status(StatusCodes.OK).send(data);
};

const GetOrderById = async (req: any, res: any, next: any) => {
  const data = await getOrderById(req.params.id);
  if (data.length === 0) {
    const notFoundError = new NotFoundError('Order not found');
    next(notFoundError);
    return;
  }
  return res.status(StatusCodes.OK).send(data);
};

const GetOrderByCustomer = async (req: any, res: any) => {
  const data = await getOrderByCustomer(req.params.id);
  return res.status(StatusCodes.OK).send(data);
};

const ConfirmOrder = async (req: any, res: any) => {
  const data = await confirmOrder(req.body.OrderID);
  return res.status(StatusCodes.OK).send(data);
};

const CreateOrder = async (req: any, res: any) => {
  try {
    await createOrder(req.body);
    return res.status(StatusCodes.CREATED).send({
      message: 'Create Order Successfully!',
    });
  } catch (error) {
    throw error;
  }
};

const GetChartOrderByMonth = async (req: any, res: any) => {
  const data = await getChartOrderByMonth();
  return res.status(StatusCodes.OK).send(data);
};

module.exports = {
  GetAllOrder,
  GetOrderById,
  GetOrderByCustomer,
  ConfirmOrder,
  CreateOrder,
  GetChartOrderByMonth,
};
