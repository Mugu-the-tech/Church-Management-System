//User schema in the modal folder where we create boundaries for the APIs, like which data will allow and key names, etc.
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        require: true,
        trim: true,
        min:3,
        max:20,
    },
    lastName:{
        type:String,
        require: true,
        trim: true,
        min:3,
        max:20,
    },
    username:{
        type:String,
        require:true,
        trim:true,
        unique:true,
        lowercase:true,
        index:true,
    },
    email:{
        type:String,
        require:true,
        trim:true,
        unique:true,
        lowercase:true,
    },
    hash_password:{
        type:String,
        require:true,
    },
},{timestamps:true});
//For get fullName from when we get data from database
userSchema.virtual("fullName").get(function () {
    return `${this.firstName} ${this.lastName}`;
  });
  userSchema.method({
    async authenticate(password) {
       return bcrypt.compare(password, this.hash_password);
    },
  });
  module.exports = mongoose.model("User", userSchema);
  //Like this, we define the keys for requests and can make a virtual method using mongoose. Here we made one method for authentication. We can compare passwords with the database and return the result from here.
//By using virtual, we can directly make one key-value pair and give it to the DB response.