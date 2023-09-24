const express = require('express');
const router = express.Router();

const {
  AddToCart,
  GetCartById,
  DeleteCart,
  UpdateCart,
  CalculateCartById,
} = require('../controllers/order.controller');

router.route('/').post(AddToCart).delete(DeleteCart).put(UpdateCart);
router.route('/:id').get(GetCartById);
router.route('/calculate/:id').get(CalculateCartById);

module.exports = router;
