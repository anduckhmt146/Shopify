const { getAllUsers } = require('../models/user.model');

const GetAllUsers = async (req: any, res: any) => {
  const data = await getAllUsers();
  return res.send(data);
};

module.exports = { GetAllUsers };
