import { AddToCartDto } from '../dto/addToCart.dto';
import { DeleteCartDto } from '../dto/deleteCart.dto';
import { UpdateCartDto } from '../dto/updateCart.dto';

const useQuery = require('../utils/useQuery');

const addToCart = async (addToCart: AddToCartDto) => {
  try {
    let query = `SELECT * FROM add_to_cart WHERE CustomerID='${addToCart.customerID}' AND ProductID='${addToCart.productID}' AND COLOR='${addToCart.color}' AND SIZE='${addToCart.size}'`;
    const rows = await useQuery(query);
    const data = JSON.parse(JSON.stringify(rows));
    if (data.length > 0) {
      query = `UPDATE add_to_cart SET NUMBER = NUMBER+'${addToCart.quantity}' WHERE CustomerID='${addToCart.customerID}' AND ProductID='${addToCart.productID}' AND COLOR='${addToCart.color}' AND SIZE='${addToCart.size}'`;
      await useQuery(query);
    } else {
      query = `INSERT INTO add_to_cart(ProductID, COLOR, SIZE, CustomerID, NUMBER) VALUES ('${addToCart.productID}','${addToCart.color}','${addToCart.size}','${addToCart.customerID}','${addToCart.quantity}')`;
      await useQuery(query);
    }
  } catch (error) {
    throw error;
  }
};

const getCartByCustomerID = async (customerID: string) => {
  const query = `SELECT * FROM add_to_cart AS A JOIN product AS P ON A.ProductID=P.CODE AND A.COLOR=P.COLOR AND A.SIZE=P.SIZE WHERE CustomerID='${customerID}'`;
  try {
    const rows = await useQuery(query);
    return JSON.parse(JSON.stringify(rows));
  } catch (error) {
    throw error;
  }
};

const deleteCart = async (deleteCart: DeleteCartDto) => {
  const query = `DELETE FROM add_to_cart WHERE COLOR='${deleteCart.color}' AND SIZE='${deleteCart.size}' AND ProductID='${deleteCart.productID}' AND CustomerID='${deleteCart.customerID}'`;
  try {
    await useQuery(query);
    return {
      message: 'Delete Cart successfully!',
    };
  } catch (error) {
    throw error;
  }
};

const updateCart = async (updateCart: UpdateCartDto) => {
  const query = `UPDATE add_to_cart SET NUMBER = '${updateCart.quantity}' WHERE COLOR='${updateCart.color}' AND SIZE='${updateCart.size}' AND ProductID='${updateCart.productID}' AND CustomerID='${updateCart.customerID}'`;
  try {
    await useQuery(query);
    return {
      message: 'Update Cart successfully!',
    };
  } catch (error) {
    throw error;
  }
};

const calculateCartById = async (customerID: string) => {
  const query = `SELECT CustomerID, SUM(NUMBER), SUM(NUMBER*(PRICE*(1-SALEOFF))) AS TOTAL_COST FROM add_to_cart AS A JOIN product AS P ON ProductID=CODE AND A.COLOR = P.COLOR AND A.SIZE=P.SIZE WHERE CustomerID='${customerID}' GROUP BY CustomerID`;
  try {
    const rows = await useQuery(query);
    return JSON.parse(JSON.stringify(rows));
  } catch (error) {
    throw error;
  }
};

module.exports = {
  addToCart,
  getCartByCustomerID,
  deleteCart,
  updateCart,
  calculateCartById,
};
