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

const FindByUserName = async (req: any, res: any, next: any) => {
  const userName = req.body.username;
  const data = await findByUserName(userName);
  if (data.length === 0) {
    const notFoundError = new NotFoundError('User not found');
    next(notFoundError);
    return;
  }
  return res.send(data);
};

const Register = async (req: any, res: any, next: any) => {
  const userName = req.body.username;
  const userIsExist = await findByUserName(userName);
  if (userIsExist.length !== 0) {
    const unAuthenticatedError = new UnauthenticatedError('User is exist');
    next(unAuthenticatedError);
    return;
  }
  // hash password
  req.body.password = hashPassword(req.body.password);
  const data = await createUser(req.body);
  return res.send(data);
};

const Login = async (req: any, res: any) => {};

module.exports = { GetAllUsers, GetUserById, FindByUserName, Register, Login };
