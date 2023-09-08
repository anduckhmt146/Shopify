import { RequestListener } from 'http';

const { StatusCodes } = require('http-status-codes');
const {
  getAllUsers,
  getUserById,
  findByUserName,
  createUser,
} = require('../models/user.model');

const {
  NotFoundError,
  UnauthenticatedError,
} = require('../utils/errorHandler');

const { hashPassword, comparePassword } = require('../utils/passwordService');
const { generateToken } = require('../utils/jwtService');
const { sendEmail } = require('../utils/mailService');

const GetAllUsers = async (req: any, res: any) => {
  const data = await getAllUsers();
  return res.send(data);
};

const GetUserById = async (req: any, res: any, next: any) => {
  const data = await getUserById(req.params.id);
  if (data.length === 0) {
    const notFoundError = new NotFoundError('User not found');
    next(notFoundError);
    return;
  }
  return res.send(data);
};
const Register = async (req: any, res: any, next: any) => {
  const userName = req.body.username;
  const user = await findByUserName(userName);
  if (user.length !== 0) {
    const unAuthenticatedError = new UnauthenticatedError('User is exist');
    next(unAuthenticatedError);
    return;
  }
  // hash password
  req.body.password = await hashPassword(req.body.password);
  try {
    await createUser(req.body);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      message: error,
    });
  }
  return res.status(StatusCodes.CREATED).send({
    message: 'User created successfully',
  });
};

const Login = async (req: any, res: any, next: any) => {
  const userName = req.body.username;
  // check user exists
  const user = await findByUserName(userName);
  if (user.length === 0) {
    const notFoundError = new NotFoundError('User not found');
    next(notFoundError);
    return;
  }
  // compare password
  const isPasswordCorrect = await comparePassword(
    req.body.password,
    user[0].PASSWORD
  );
  if (!isPasswordCorrect) {
    const unAuthenticatedError = new UnauthenticatedError(
      'Password is not correct!'
    );
    next(unAuthenticatedError);
    return;
  }
  // generate token
  const token = await generateToken(user);
  return res.status(StatusCodes.OK).send({
    message: 'Login successfully!',
    data: { token },
  });
};

const SendEmail = async (req: any, res: any) => {
  try {
    await sendEmail(req.body.email);
    return res.status(StatusCodes.OK).send({
      message: 'Send email successfully!',
    });
  } catch (error) {
    throw error;
  }
};

module.exports = { GetAllUsers, GetUserById, Register, Login, SendEmail };
