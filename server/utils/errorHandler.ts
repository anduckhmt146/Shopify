const StatusCodes = require('http-status-codes');

class CustomAPIError extends Error {
  constructor(message: string) {
    super(message);
  }
}

class BadRequestError extends CustomAPIError {
  statusCode: number;
  constructor(message: string) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

class UnauthorizedError extends CustomAPIError {
  statusCode: number;
  constructor(message: string) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

class UnauthenticatedError extends CustomAPIError {
  statusCode: number;
  constructor(message: string) {
    super(message);
    this.statusCode = StatusCodes.FORBIDDEN;
  }
}

class NotFoundError extends CustomAPIError {
  statusCode: number;
  constructor(message: string) {
    super(message);
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

class InternalServerError extends CustomAPIError {
  statusCode: number;
  constructor(message: string) {
    super(message);
    this.statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
  }
}

module.exports = {
  CustomAPIError,
  BadRequestError,
  UnauthorizedError,
  UnauthenticatedError,
  NotFoundError,
  InternalServerError,
};
