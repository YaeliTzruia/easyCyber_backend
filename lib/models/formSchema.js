const mongoose = require("mongoose");

const phoneSchema = new mongoose.Schema({
  number: { type: String, required: true },
  desc: {
    type: String,
    // this one works but for some reason it won't alow the same phonenumber to be entered twice into the DB
    validate: {
      validator: function (value) {
        if (this.parent().phoneNumber.indexOf(this) > 0) {
          return value != null && value.length > 0;
        }
        return true;
      },
      message: "Description needed for additional phone numbers",
    },
  },
});

const emailSchema = new mongoose.Schema({
  email: { type: String, required: true },
  desc: {
    type: String,
    // this one works but for some reason it won't alow the same email to be entered twice into the DB
    validate: {
      validator: function (value) {
        if (this.parent().email.indexOf(this) > 0) {
          return value != null && value.length > 0;
        }
        return true;
      },
      message: "Description needed for additional emails",
    },
  },
});

const formSchema = new mongoose.Schema(
  {
    fullName: {
      firstName: { type: String, required: [true, "must enter a firstname"] },
      middleName: { type: String, required: true },
      lastName: { type: String, required: [true, "must enter a lastname"] },
    },
    phoneNumber: [phoneSchema],
    email: [emailSchema],
  },
  {
    timestamps: true,
  }
);

const Form = mongoose.model("forms", formSchema);

module.exports = Form;
