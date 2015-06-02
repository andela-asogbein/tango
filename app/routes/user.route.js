var mongoose = require("mongoose");
var express = require("express");
var userRouter = express.Router();
require("../model/user.model");
var Users = mongoose.model("Users");

module.exports = function(app){
  userRouter.route("/subscribe")
    .post(function(req,res){
      Users.create(req.body, function(err,result){
        if(err){
          return res.json(err);
        }
        res.json(result);
      })
    })
    .get(function(req,res){
      Users.find({},function(err,result){
        if(err){
          return res.json(err);
        }
        return res.json(result);
      })
    })
app.use("/",userRouter);

}

