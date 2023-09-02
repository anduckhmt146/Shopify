const express = require('express');
const router = express.Router();
const { GetAllUsers } = require('../controllers/user.controller');

router.get('/', GetAllUsers);
module.exports = router;
