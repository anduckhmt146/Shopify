import { CreateUserDto } from '../dto/createUser.dto';
const jwt = require('jsonwebtoken');

require('dotenv').config();

const generateToken = (createUserDto: CreateUserDto) => {
  const token = jwt.sign({
    username: createUserDto.USERNAME,
    password: createUserDto.PASSWORD,
    phoneNumber: createUserDto.Phone_Number,
  });
  return token;
};

const decodeToken = (token: string) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

module.exports = { generateToken, decodeToken };
