const { StatusCodes } = require('http-status-codes');
const {
  addToCart,
  getCartByUserID,
  deleteInCart,
  updateCart,
  calculateCartByUserId,
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

const GetCartByUserID = async (req: any, res: any) => {
  const data = await getCartByUserID(req.params.id);
  return res.status(StatusCodes.OK).send(data);
};

const DeleteInCart = async (req: any, res: any) => {
  try {
    await deleteInCart(req.body);
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

const CalculateCartByUserId = async (req: any, res: any) => {
  const data = await calculateCartByUserId(req.params.id);
  return res.status(StatusCodes.OK).send(data);
};

module.exports = {
  AddToCart,
  GetCartByUserID,
  DeleteInCart,
  UpdateCart,
  CalculateCartByUserId,
};
