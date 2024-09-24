const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = process.env.PORT || 5001;

app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routes
const FormRoutes = require("./routes/form");

// routes
app.use("/form", FormRoutes);

mongoose.set("strictQuery", true);

mongoose
  .connect("mongodb://localhost:27017/DynamicUserInformationForm", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    app.listen(PORT, () => {
      console.log(`our server is running on port: ${PORT}`);
    });
  })
  .catch((err) => console.log(err, "mongo error"));
