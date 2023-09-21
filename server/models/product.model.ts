import { QueryOptionsDto } from '../dto/queryOptions.dto';

const useQuery = require('../utils/useQuery');

const getProductById = async (id: string) => {
  const query = `SELECT CODE, NAME, MATERIAL, DESCRIPTION,PRICE, 
  SALEOFF,IMG1,IMG2,IMG3,IMG4,
  CONCAT("[", GROUP_CONCAT(distinct(SIZE)), "]") AS SIZE,
  CONCAT("[", GROUP_CONCAT(distinct(COLOR) SEPARATOR ','), "]") AS COLOR
  FROM product WHERE CODE = '${id}'
  GROUP BY CODE, NAME, MATERIAL, DESCRIPTION,
  PRICE, SALEOFF,IMG1,IMG2,IMG3,IMG4`;
  try {
    const rows = await useQuery(query);
    return JSON.parse(JSON.stringify(rows));
  } catch (err) {
    throw err;
  }
};

const getAllCategories = async () => {
  const query = 'SELECT ID, NAME from categories';
  try {
    const rows = await useQuery(query);
    return JSON.parse(JSON.stringify(rows));
  } catch (err) {
    throw err;
  }
};

const getAllCollections = async () => {
  const query = 'SELECT ID, NAME from collection';
  try {
    const rows = await useQuery(query);
    return JSON.parse(JSON.stringify(rows));
  } catch (err) {
    throw err;
  }
};

const filterProducts = async (queryParams: QueryOptionsDto) => {
  const { categoryID, collectionID, size, color, price } = queryParams;
  let query = `SELECT distinct(CODE), NAME, PRICE, SALEOFF,IMG1,IMG2,IMG3,IMG4, CONCAT("[", GROUP_CONCAT(distinct(SIZE)), "]") AS SIZE,
  CONCAT("[", GROUP_CONCAT(distinct(COLOR) SEPARATOR ','), "]") AS COLOR FROM product join in_collection on code=ProductCode`;
  let attemptQuery = '';
  const queryScript = [];
  if (categoryID) queryScript.push(`CATEGORY_ID = '${categoryID}'`);
  if (collectionID) queryScript.push(`CollectID = '${collectionID}'`);
  if (size) queryScript.push(`SIZE LIKE '${size}%'`);
  if (color) queryScript.push(`COLOR LIKE '${color}%'`);
  // 1: < 300 000 , 2: 300 000 -> 500 000, 3: > 500 000
  if (price == 1) {
    queryScript.push('PRICE < 300000');
  } else if (price == 2) {
    queryScript.push('PRICE >= 300000 AND PRICE <= 500000');
  } else if (price == 3) {
    queryScript.push('PRICE > 500000');
  }
  queryScript.forEach((query: string, index: number) => {
    if (index == 0) {
      attemptQuery += ' WHERE ' + query;
    } else {
      attemptQuery += ' AND ' + query;
    }
  });
  query +=
    attemptQuery +
    ' GROUP BY CODE, NAME, MATERIAL, DESCRIPTION,PRICE, SALEOFF,IMG1,IMG2,IMG3,IMG4';
  console.log(query);
  try {
    const rows = await useQuery(query);
    return JSON.parse(JSON.stringify(rows));
  } catch (err) {
    throw err;
  }
};

module.exports = {
  filterProducts,
  getProductById,
  getAllCategories,
  getAllCollections,
};
