const express = require("express");
const app = express();
const path = require("path");
const router = require("./router/userRouter");
const bodyParser = require("body-parser");
const PORT = 3000;

// Set the view engine to EJS
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", router);

// Listen on the specified port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
