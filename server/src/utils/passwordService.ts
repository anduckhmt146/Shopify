const bcrypt = require('bcrypt');

const hashPassword = async (password: string) => {
  return await bcrypt.hash(password, 5);
};

const comparePassword = async (password: string, hashPassword: string) => {
  return await bcrypt.compare(password, hashPassword);
};

module.exports = { hashPassword, comparePassword };
