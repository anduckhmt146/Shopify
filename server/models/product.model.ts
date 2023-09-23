import { CreateProductDto } from '../dto/createProduct.dto';
import { QueryOptionsDto } from '../dto/queryOptions.dto';
import { RestockDto } from '../dto/restockProduct.dto';
import { UpdateProductDto } from '../dto/updateProduct.dto';

const useQuery = require('../utils/useQuery');

const getProductById = async (id: string) => {
  const query = `SELECT CODE, NAME, MATERIAL, DESCRIPTION,PRICE, 
  SALEOFF,IMG1,IMG2,IMG3,IMG4,
  CONCAT("[", GROUP_CONCAT(distinct(SIZE)), "]") AS SIZE,
  CONCAT("[", GROUP_CONCAT(distinct(COLOR) SEPARATOR '/'), "]") AS COLOR
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
  CONCAT("[", GROUP_CONCAT(distinct(COLOR) SEPARATOR '/'), "]") AS COLOR FROM product join in_collection on code=ProductCode`;
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
  try {
    const rows = await useQuery(query);
    return JSON.parse(JSON.stringify(rows));
  } catch (err) {
    throw err;
  }
};

const createProduct = async (createProducts: CreateProductDto) => {
  try {
    for (let color of createProducts.color) {
      for (let size of createProducts.size) {
        const query = `INSERT INTO product VALUES ('${createProducts.code}','${createProducts.name}','${color}','${size}','${createProducts.material}','${createProducts.description}',0,'${createProducts.sale}','${createProducts.price}','${createProducts.image[0]}','${createProducts.image[1]}','${createProducts.image[2]}','${createProducts.image[3]}','${createProducts.category}')`;
        await useQuery(query);
      }
    }
    return {
      message: 'Product created successfully',
    };
  } catch (err) {
    throw err;
  }
};

const deleteProduct = async (id: string) => {
  try {
    const query = `DELETE FROM product WHERE CODE='${id}'`;
    await useQuery(query);
    return {
      message: 'Product delete successfully',
    };
  } catch (error) {
    throw error;
  }
};

const updateProduct = async (updateProducts: UpdateProductDto) => {
  try {
    const query = `UPDATE product SET NAME='${updateProducts.name}', PRICE='${updateProducts.price}',SALEOFF='${updateProducts.sale}',MATERIAL='${updateProducts.material}', DESCRIPTION='${updateProducts.material}', IMG1='${updateProducts.image[0]}',IMG2='${updateProducts.image[1]}', IMG3='${updateProducts.image[2]}', IMG4='${updateProducts.image[3]}' WHERE CODE = '${updateProducts.code}'`;
    await useQuery(query);
    return {
      message: 'Update created successfully',
    };
  } catch (err) {
    throw err;
  }
};

const getSizeColorById = async (id: string) => {
  try {
    const query = `SELECT CODE, GROUP_CONCAT(distinct(SIZE)) AS SIZE, GROUP_CONCAT(distinct(COLOR) SEPARATOR '/') AS COLOR FROM product WHERE CODE = '${id}'`;
    await useQuery(query);
    const rows = await useQuery(query);
    return JSON.parse(JSON.stringify(rows));
  } catch (error) {
    throw error;
  }
};

const getCategoryById = async (id: string) => {
  try {
    const query = `SELECT DISTINCT(CODE), categories.NAME AS CATEGORY FROM product JOIN categories ON CATEGORY_ID=categories.ID WHERE CODE = '${id}'`;
    const rows = await useQuery(query);
    return JSON.parse(JSON.stringify(rows));
  } catch (error) {
    throw error;
  }
};

const getQuantityProduct = async (id: string, size: string, color: string) => {
  try {
    const query = `SELECT QUANTITY FROM product WHERE CODE = '${id}' AND SIZE = '${size}' AND COLOR = '${color}'`;
    const rows = await useQuery(query);
    return JSON.parse(JSON.stringify(rows));
  } catch (error) {
    throw error;
  }
};

const restockProduct = async (restockProduct: RestockDto) => {
  try {
    const query = `UPDATE product SET QUANTITY='${restockProduct.quantity}' WHERE CODE = '${restockProduct.code}' AND SIZE='${restockProduct.size}' AND COLOR='${restockProduct.color}'`;
    await useQuery(query);
    return {
      message: 'Restock Product successfully',
    };
  } catch (error) {
    throw error;
  }
};

const getProductChartByMonth = async (id: string) => {
  try {
    const query = `SELECT MONTH(date_time) AS MONTH, SUM(NUMBER) AS NUMBER FROM orders as O join include AS I on O.orderID = I.orderID WHERE ProductID='${id}' GROUP BY MONTH`;
    const rows = await useQuery(query);
    return JSON.parse(JSON.stringify(rows));
  } catch (error) {
    throw error;
  }
};

module.exports = {
  filterProducts,
  getProductById,
  getAllCategories,
  getAllCollections,
  createProduct,
  deleteProduct,
  updateProduct,
  getCategoryById,
  getSizeColorById,
  getQuantityProduct,
  restockProduct,
  getProductChartByMonth,
};
