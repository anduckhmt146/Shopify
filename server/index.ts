const express = require('express');
const app = express();
const connectDB = require('./db/connect');

const userRoutes = require('./routes/user.route');
const cartRoutes = require('./routes/cart.route');
const productRoutes = require('./routes/product.route');
const orderRoutes = require('./routes/order.route');

const authMiddleware = require('./middlewares/auth.middleware');
const notFoundMiddleware = require('./middlewares/notFound.middleware');
const errorHandlerMiddleware = require('./middlewares/errorHandler.middleware');

require('dotenv').config();

// middleware
app.use(express.json());

// routes
app.use('/api/v0/users', userRoutes);
app.use('/api/v0/cart', cartRoutes);
app.use('/api/v0/products', productRoutes);
app.use('/api/v0/orders', orderRoutes);

// error-handling
app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);

const port = process.env.PORT || 8080;

const start = async () => {
  try {
    await connectDB.connect((err: any) => {
      if (err) throw err;
      console.log('Connected MySQL successfully!');
    });
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
