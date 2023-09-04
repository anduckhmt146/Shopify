import { CreateUserDto } from '../dto/createUser.dto';
const jwt = require('jsonwebtoken');

require('dotenv').config();

const generateToken = (createUserDto: CreateUserDto) => {
  const retData = { ...createUserDto };
  delete retData.password;
  const token = jwt.sign(retData, process.env.JWT_SECRET);
  return token;
};

const decodeToken = (token: string) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

module.exports = { generateToken, decodeToken };
