// Connect to MongoDB

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/Userdata")
  .then(() => {
    console.log("connected");
  })
  .catch((error) => {
    console.error("Error:", error);
  });

const userSchema = new mongoose.Schema({
  name: String,
  number: Number,
  password: String,
});
module.exports = mongoose.model("Biodata", userSchema);
