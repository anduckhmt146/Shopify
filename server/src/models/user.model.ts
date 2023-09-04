import { CreateUserDto, Role } from '../dto/createUser.dto';

const useQuery = require('../utils/useQuery');

const getAllUsers = async () => {
  const query = 'SELECT * FROM USER';

  try {
    const rows = await useQuery(query);
    return JSON.parse(JSON.stringify(rows));
  } catch (err) {
    throw err;
  }
};

const getUserById = async (id: string) => {
  const query = `SELECT USERID, Phone_Number, USERNAME, PASSWORD, NAME, BIRTHDAY, AVATAR, EMAIL, ROLE FROM USER WHERE USERID = ${id}`;
  try {
    const rows = await useQuery(query);
    return JSON.parse(JSON.stringify(rows));
  } catch (err) {
    throw err;
  }
};

const findByUserName = async (username: string) => {
  const query = `SELECT USERID, Phone_Number, USERNAME, PASSWORD, NAME, BIRTHDAY, AVATAR, EMAIL, ROLE FROM USER WHERE USERNAME = '${username}'`;
  try {
    const rows = await useQuery(query);
    return JSON.parse(JSON.stringify(rows));
  } catch (err) {
    throw err;
  }
};

const createUser = async (createUserDto: CreateUserDto) => {
  if (!createUserDto.role) createUserDto.role = Role.CUSTOMER;
  if (!createUserDto.email) createUserDto.email = '';
  const query = `INSERT INTO USER (USERNAME, PASSWORD, NAME, Phone_Number, EMAIL, ROLE) VALUES ('${createUserDto.username}', '${createUserDto.password}', '${createUserDto.name}', '${createUserDto.phone}','${createUserDto.email}', '${createUserDto.role}')`;
  try {
    await useQuery(query);
    return {
      message: 'User created successfully',
    };
  } catch (err) {
    throw err;
  }
};

module.exports = { getAllUsers, getUserById, findByUserName, createUser };
