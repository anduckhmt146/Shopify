const sql = require('../db/connect');

const useQuery = async (query: string) => {
  return new Promise((resolve, reject) => {
    sql.query(query, (err: any, rows: any) => {
      if (err) {
        console.error('Error:', err);
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};

module.exports = useQuery;
