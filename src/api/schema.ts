const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema({
  id: String,
  country: String,
  coins: Number,
  energy: Number,
  level: Number
 }, { timestamps: true }
)

const User = mongoose.model('User', userSchema)

module.exports =  User;