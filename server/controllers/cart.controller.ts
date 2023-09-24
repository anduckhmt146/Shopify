const { StatusCodes } = require('http-status-codes');
const {
  addToCart,
  getCartByCustomerID,
  deleteCart,
  updateCart,
  calculateCartById,
} = require('../models/cart.model');

const AddToCart = async (req: any, res: any) => {
  try {
    await addToCart(req.body);
    return res.status(StatusCodes.CREATED).send({
      message: 'Add to cart successfully!',
    });
  } catch (error) {
    throw error;
  }
};

const GetCartByCustomerID = async (req: any, res: any) => {
  const data = await getCartByCustomerID(req.params.id);
  return res.status(StatusCodes.OK).send(data);
};

const DeleteCart = async (req: any, res: any) => {
  try {
    await deleteCart(req.body);
    return res.status(StatusCodes.OK).send({
      message: 'Delete cart successfully!',
    });
  } catch (error) {
    throw error;
  }
};

const UpdateCart = async (req: any, res: any) => {
  try {
    await updateCart(req.body);
    return res.status(StatusCodes.OK).send({
      message: 'Update cart successfully!',
    });
  } catch (error) {
    throw error;
  }
};

const CalculateCartById = async (req: any, res: any) => {
  const data = await calculateCartById(req.params.id);
  return res.status(StatusCodes.OK).send(data);
};

module.exports = {
  AddToCart,
  GetCartByCustomerID,
  DeleteCart,
  UpdateCart,
  CalculateCartById,
};
