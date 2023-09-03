const {
  getAllUsers,
  getUserById,
  findByUserName,
  createUser,
} = require('../models/user.model');

const { NotFoundError } = require('../utils/errorHandler');

const GetAllUsers = async (req: any, res: any) => {
  const data = await getAllUsers();
  return res.send(data);
};

const GetUserById = async (req: any, res: any, next: any) => {
  const data = await getUserById(req.params.id);
  if (data.length === 0) {
    const notFoundError = new NotFoundError('Not found UserID');
    next(notFoundError);
    return;
  }
  return res.send(data);
};

const FindByUserName = async (req: any, res: any) => {
  const userName = req.body.username;
  const data = await findByUserName(userName);
  if (data.length === 0) throw new NotFoundError('User not found');
  return res.send(data);
};

const Register = async (req: any, res: any) => {
  const data = await createUser(req.body);
  return res.send(data);
};

const Login = async (req: any, res: any) => {};

module.exports = { GetAllUsers, GetUserById, FindByUserName, Register, Login };
