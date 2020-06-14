class HttpException extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

//Further inheritance, this way we know for sure it is coming from our
//HttpException custom error.
class BadRequestError extends HttpException {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    this.status = 400;
  }
}
class NotFoundError extends HttpException {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    this.status = 404;
  }
}

module.exports = { HttpException, BadRequestError, NotFoundError };
