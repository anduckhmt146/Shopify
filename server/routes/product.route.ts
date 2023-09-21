const express = require('express');
const router = express.Router();
const {
  FilterProducts,
  GetProductById,
  GetAllCategories,
  GetAllCollections,
} = require('../controllers/product.controller');

router.get('/', FilterProducts);
router.get('/categories', GetAllCategories);
router.get('/collections', GetAllCollections);
router.get('/:id', GetProductById);

module.exports = router;
