const notFoundMiddleware = (req: any, res: any) =>
  res.status(404).send('Route does not exist');

module.exports = notFoundMiddleware;
