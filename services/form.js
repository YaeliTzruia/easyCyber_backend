const Form = require("../lib/models/formSchema");
const ErrorHandler = require("../lib/errorHandler");

const create = async (obj) => {
  try {
    const newForm = new Form(obj);
    const save = await newForm.save();
    return save;
  } catch (err) {
    return err;
  }
};
module.exports = { create };
