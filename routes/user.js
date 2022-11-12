const express = require("express");
const mongoose = require("mongoose");
const { getAllUsers } = require('../controllers/user');

const UserModel = require("../models/user.js");

const router = express.Router();


router.get("/",  getAllUsers)

router.post("/", async(req, res) => {
  console.log(UserModel);
  const data = new UserModel({
    fname : req.body.fname,
    lname : req.body.lname,
    age   : req.body.age  
  })
  await data.save();
  res.send(data)
})

module.exports = router;