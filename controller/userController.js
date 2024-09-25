const Biodata = require("../model/userModel");
const bcrypt = require("bcrypt");
const renderHome = (req, res) => {
  Biodata.find().then(() => {
    res.render("index");
  });
};

const addUser = (req, res) => {
  const saltround = 10;
  bcrypt.hash(req.body.password, saltround, (err, hash) => {
    if (err) {
      return res.status(500).send("error hashing password");
    }
    const newUser = new Biodata({
      name: req.body.name,
      number: req.body.number,
      password: hash,
    });
    newUser
      .save()
      .then((result) => {
        res.redirect("/");
      })
      .catch((error) => {
        return res.status(500).send("error saving password");
      });
  });
};

module.exports = { renderHome, addUser };
