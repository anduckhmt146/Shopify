const express = require('express');
const router = express.Router();
const {
  GetAllUsers,
  GetUserById,
  Register,
  Login,
  SendEmail,
} = require('../controllers/user.controller');

router.route('/').get(GetAllUsers);
router.route('/register').post(Register);
router.route('/login').post(Login);
router.route('/send-email').post(SendEmail);
router.route('/:id').get(GetUserById);
module.exports = router;
