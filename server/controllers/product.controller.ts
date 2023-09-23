const { StatusCodes } = require('http-status-codes');
const {
  filterProducts,
  getProductById,
  getAllCategories,
  getAllCollections,
  createProduct,
  updateProduct,
  deleteProduct,
  getCategoryById,
  getSizeColorById,
  getQuantityProduct,
  restockProduct,
  getProductChartByMonth,
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

const CreateProduct = async (req: any, res: any) => {
  try {
    await createProduct(req.body);
    return res.status(StatusCodes.CREATED).send({
      message: 'Create Product Successfully!',
    });
  } catch (error) {
    throw error;
  }
};

const DeleteProduct = async (req: any, res: any) => {
  try {
    await deleteProduct(req.params.id);
    return res.status(StatusCodes.OK).send({
      message: 'Delete Product Successfully!',
    });
  } catch (error) {
    throw error;
  }
};

const UpdateProduct = async (req: any, res: any) => {
  try {
    await updateProduct({ code: req.params.id, ...req.body });
    return res.status(StatusCodes.OK).send({
      message: 'Update Product Successfully!',
    });
  } catch (error) {
    throw error;
  }
};

const GetCategoryById = async (req: any, res: any) => {
  try {
    const data = await getCategoryById(req.params.id);
    return res.status(StatusCodes.OK).send(data);
  } catch (error) {
    throw error;
  }
};

const GetSizeColorById = async (req: any, res: any) => {
  try {
    const data = await getSizeColorById(req.body.id);
    return res.status(StatusCodes.OK).send(data);
  } catch (error) {
    throw error;
  }
};
const GetQuantityProduct = async (req: any, res: any) => {
  try {
    const { size, color } = req.body;
    const data = await getQuantityProduct(req.params.id, size, color);
    return res.status(StatusCodes.OK).send(data);
  } catch (error) {
    throw error;
  }
};

const RestockProduct = async (req: any, res: any) => {
  try {
    await restockProduct({ code: req.params.id, ...req.body });
    return res.status(StatusCodes.OK).send({
      message: 'Restock Product Successfully!',
    });
  } catch (error) {
    throw error;
  }
};
const GetProductChartByMonth = async (req: any, res: any) => {
  try {
    const data = await getProductChartByMonth(req.params.id);
    return res.status(StatusCodes.OK).send(data);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  FilterProducts,
  GetProductById,
  GetAllCategories,
  GetAllCollections,
  CreateProduct,
  UpdateProduct,
  DeleteProduct,
  GetCategoryById,
  GetSizeColorById,
  GetQuantityProduct,
  RestockProduct,
  GetProductChartByMonth,
};
