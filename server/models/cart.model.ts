import { AddToCartDto } from '../dto/addToCart.dto';
import { UpdateCartDto } from '../dto/updateCart.dto';

const useQuery = require('../utils/useQuery');

const addToCart = async (addToCart: AddToCartDto) => {};

const getCartById = async (id: string) => {};

const deleteCart = async (id: string) => {};

const updateCart = async (updateCart: UpdateCartDto) => {};

const calculateCartById = async (id: string) => {};

module.exports = {
  addToCart,
  getCartById,
  deleteCart,
  updateCart,
  calculateCartById,
};
