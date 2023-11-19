const express = require('express');
const router = express.Router();

const {
  AddToCart,
  GetCartByUserID,
  DeleteInCart,
  UpdateCart,
  CalculateCartByUserId,
} = require('../controllers/cart.controller');

router.route('/').post(AddToCart).delete(DeleteInCart).put(UpdateCart);
router.route('/customer/:id').get(GetCartByUserID);
router.route('/calculate/:id').get(CalculateCartByUserId);

module.exports = router;
