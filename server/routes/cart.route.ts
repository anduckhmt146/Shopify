const express = require('express');
const router = express.Router();

const {
  AddToCart,
  GetCartByCustomerID,
  DeleteCart,
  UpdateCart,
  CalculateCartById,
} = require('../controllers/order.controller');

router.route('/').post(AddToCart).delete(DeleteCart).put(UpdateCart);
router.route('/customer/:id').get(GetCartByCustomerID);
router.route('/calculate/:id').get(CalculateCartById);

module.exports = router;
