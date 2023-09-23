const express = require('express');
const router = express.Router();
const {
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
} = require('../controllers/product.controller');

router.route('/').get(FilterProducts).post(CreateProduct);
router.route('/categories').get(GetAllCategories);
router.route('/collections').get(GetAllCollections);
router.route('/categories/:id').get(GetCategoryById);
router.route('/size-color/:id').get(GetSizeColorById);
router.route('/quantity/:id').get(GetQuantityProduct);
router.route('/restock/:id').put(RestockProduct);
router.route('/chart/:id').get(GetProductChartByMonth);
router
  .route('/:id')
  .get(GetProductById)
  .delete(DeleteProduct)
  .put(UpdateProduct);

module.exports = router;
