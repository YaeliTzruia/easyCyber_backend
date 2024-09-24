class ErrorHandler {
  constructor(status, msg) {
    this.status = status;
    this.msg = msg;
  }

  static badRequest = () =>
    new ErrorHandler(400, "request failed, please try again later");
  static FieldError = () =>
    new ErrorHandler(409, "Some fields are incorrect or missing");
}
module.exports = ErrorHandler;
