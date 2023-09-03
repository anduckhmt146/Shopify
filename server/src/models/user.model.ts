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
  const query = `SELECT USERID, Phone_Number, USERNAME, PASSWORD, NAME, BIRTHDAY, AVATAR, ROLE FROM USER WHERE USERID = ${id}`;
  try {
    const rows = await useQuery(query);
    return JSON.parse(JSON.stringify(rows));
  } catch (err) {
    throw err;
  }
};

const findByUserName = async (username: string) => {
  const query = `SELECT USERID, Phone_Number, USERNAME, PASSWORD, NAME, BIRTHDAY, AVATAR, ROLE FROM USER WHERE USERNAME = ${username}`;
  try {
    const rows = await useQuery(query);
    return JSON.parse(JSON.stringify(rows));
  } catch (err) {
    throw err;
  }
};

const createUser = async (createUserDto: CreateUserDto) => {
  if (!createUserDto.ROLE) createUserDto.ROLE = Role.USER;
  const query = `INSERT INTO USER (USERNAME, PASSWORD, NAME, Phone_Number, ROLE) VALUES ('${createUserDto.USERNAME}', '${createUserDto.PASSWORD}', '${createUserDto.NAME}', '${createUserDto.Phone_Number}','${createUserDto.ROLE}')`;
  try {
    await useQuery(query);
    return {
      status: 201,
      message: 'User created successfully',
    };
  } catch (err) {
    throw err;
  }
};

module.exports = { getAllUsers, getUserById, findByUserName, createUser };
