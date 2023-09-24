const express = require('express');
const router = express.Router();
const {
  GetAllOrder,
  GetOrderById,
  GetOrderByCustomer,
  ConfirmOrder,
  CreateOrder,
  GetChartOrderByMonth,
} = require('../controllers/order.controller');

router.route('/').get(GetAllOrder).post(CreateOrder);
router.route('/:id').get(GetOrderById);
router.route('/get-order').get(GetOrderByCustomer);
router.route('/confirm').post(ConfirmOrder);
router.route('/chart/:id').post(GetChartOrderByMonth);

module.exports = router;
