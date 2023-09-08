const express = require('express');
const router = express.Router();
const {
  GetAllUsers,
  GetUserById,
  Register,
  Login,
  SendEmail,
} = require('../controllers/user.controller');

router.get('/', GetAllUsers);
router.post('/register', Register);
router.post('/login', Login);
router.post('/send-email', SendEmail);
router.get('/:id', GetUserById);
module.exports = router;
