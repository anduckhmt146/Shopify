const { StatusCodes } = require('http-status-codes');
const {
  addToCart,
  getCartById,
  deleteCart,
  updateCart,
  calculateCartById,
} = require('../models/cart.model');

const AddToCart = async (req: any, res: any) => {};

const GetCartById = async (req: any, res: any) => {};

const DeleteCart = async (req: any, res: any) => {};

const UpdateCart = async (req: any, res: any) => {};

const CalculateCartById = async (req: any, res: any) => {};

module.exports = {
  AddToCart,
  GetCartById,
  DeleteCart,
  UpdateCart,
  CalculateCartById,
};
