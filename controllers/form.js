const ErrorHandler = require("../lib/errorHandler");
const formService = require("../services/form");
const create = async (req, res) => {
  try {
    await formService.create(req.body).then((r) => {
      if (!res) {
        return ErrorHandler.FieldError();
      } else res.send(r);
    });
  } catch (err) {
    // if (err instanceof MongoServerError && err.code === 11000) {
    //   console.error("# Duplicate Data Found:\n", err);
    //   insertResult = {
    //     insertedId: null,
    //     message: "Message expalining the situation.",
    //   };
    // } else {
    throw new Error(err);
    // }
    // return err;
  }
};

module.exports = { create };
