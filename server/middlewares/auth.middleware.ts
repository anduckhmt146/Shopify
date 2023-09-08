const jwt = require('jsonwebtoken');
const { UnauthenticatedError } = require('../utils/errorHandler');
const { FindByUserName } = require('../controllers/user.controller');
const { decodeToken } = require('../utils/jwtService');

const authMiddleware = async (req: any, res: any, next: any) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer')) {
    throw new UnauthenticatedError('Authentication invalid');
  }
  const token = authHeader.split(' ')[1];

  try {
    const payload = decodeToken(token);
    const user = await FindByUserName(payload.username);
    req.user = user;
    next();
  } catch (error) {
    throw new UnauthenticatedError('Authentication invalid');
  }
};

module.exports = authMiddleware;
