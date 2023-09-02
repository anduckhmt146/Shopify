const useQuery = require('../utils/useQuery');

const getAllUsers = async () => {
  const query = 'SELECT * FROM CUSTOMER';

  try {
    const rows = await useQuery(query);
    return JSON.parse(JSON.stringify(rows));
  } catch (err) {
    throw err;
  }
};

module.exports = { getAllUsers };
