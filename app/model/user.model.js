'use strict'
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var users = new Schema({
  email : {
    type: String,
    required: "Email is required",
    index: {unique: true}
  }
});

mongoose.model("Users", users);
