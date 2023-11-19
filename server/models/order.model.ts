import { CreateOrderDto } from '../dto/createOrder.dto';

const useQuery = require('../utils/useQuery');

const getAllOrder = async () => {
  const query = 'SELECT * FROM orders';
  try {
    const rows = await useQuery(query);
    return JSON.parse(JSON.stringify(rows));
  } catch (error) {
    throw error;
  }
};

const getOrderById = async (id: string) => {
  const query = `SELECT OrderID, UserID, orders.NAME ,TOTAL_PRODUCT, TOTAL_COST, PAY_METHOD, RECEIVE_PHONE, RECEIVE_ADDRESS, DATE_TIME, CODE, T.COLOR, T.SIZE, PRICE, SALEOFF ,NUMBER, IMG1
  FROM orders NATURAL JOIN include  AS T JOIN Product AS P ON T.ProductID=P.CODE AND T.COLOR=P.COLOR AND T.SIZE = P.SIZE 
  WHERE orders.OrderID='${id}'`;
  try {
    const rows = await useQuery(query);
    return JSON.parse(JSON.stringify(rows));
  } catch (error) {
    throw error;
  }
};

const getOrderByCustomer = async (UserID: string) => {
  const query = `SELECT * FROM orders WHERE UserID='${UserID}'`;
  try {
    const rows = await useQuery(query);
    return JSON.parse(JSON.stringify(rows));
  } catch (error) {
    throw error;
  }
};

const confirmOrder = async (id: string) => {
  try {
    let query = `UPDATE orders SET status = 1 WHERE OrderID='${id}'`;
    await useQuery(query);
    query = `UPDATE product AS P, include AS I SET QUANTITY = QUANTITY - NUMBER 
    WHERE CODE = ProductID AND P.COLOR=I.COLOR AND P.SIZE = I.SIZE AND OrderID='${id}'`;
    await useQuery(query);
    return {
      message: 'Confirm order successfully',
    };
  } catch (error) {
    throw error;
  }
};

const createOrder = async (createOrder: CreateOrderDto) => {
  try {
    let query = `INSERT INTO orders (USERID,NAME,TOTAL_PRODUCT,TOTAL_COST,PAY_METHOD,NOTE,RECEIVE_PHONE,RECEIVE_ADDRESS) VALUES ('${createOrder.userID}','${createOrder.name}','${createOrder.totalProduct}','${createOrder.totalCost}','${createOrder.paymentMethod}','${createOrder.note}','${createOrder.phone}','${createOrder.address}')`;
    await useQuery(query);
    query = `INSERT INTO include (ProductID,COLOR,SIZE,NUMBER,OrderID) SELECT ProductID, COLOR, SIZE, NUMBER, OrderID FROM add_to_cart JOIN (SELECT max(OrderID) AS OrderID FROM orders) AS TEMP WHERE USERID='${createOrder.userID}'`;
    await useQuery(query);
    query = `DELETE FROM add_to_cart WHERE USERID='${createOrder.userID}'`;
    await useQuery(query);
    return {
      message: 'Create order successfully',
    };
  } catch (error) {
    throw error;
  }
};

const getChartOrderByMonth = async () => {
  const query = `SELECT month(date_time) AS MONTH, sum(total_cost) AS TOTAL_COST from orders group by month(date_time)`;
  try {
    const rows = await useQuery(query);
    return JSON.parse(JSON.stringify(rows));
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllOrder,
  getOrderById,
  getOrderByCustomer,
  confirmOrder,
  createOrder,
  getChartOrderByMonth,
};
