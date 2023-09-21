const { StatusCodes } = require('http-status-codes');
const {
  filterProducts,
  getProductById,
  getAllCategories,
  getAllCollections,
} = require('../models/product.model');

const {
  NotFoundError,
  UnauthenticatedError,
} = require('../utils/errorHandler');

const FilterProducts = async (req: any, res: any) => {
  const data = await filterProducts({ ...req.query });
  return res.status(StatusCodes.OK).send(data);
};

const GetProductById = async (req: any, res: any, next: any) => {
  const data = await getProductById(req.params.id);
  if (data.length === 0) {
    const notFoundError = new NotFoundError('Product not found');
    next(notFoundError);
    return;
  }
  return res.status(StatusCodes.OK).send(data);
};

const GetAllCategories = async (req: any, res: any) => {
  const data = await getAllCategories();
  return res.status(StatusCodes.OK).send(data);
};

const GetAllCollections = async (req: any, res: any) => {
  const data = await getAllCollections();
  return res.status(StatusCodes.OK).send(data);
};

module.exports = {
  FilterProducts,
  GetProductById,
  GetAllCategories,
  GetAllCollections,
};
