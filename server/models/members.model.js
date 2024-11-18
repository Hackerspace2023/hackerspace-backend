const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const memberSchema = new Schema({
  name: String,
  email: String,
  phone: Number,
  stream: String,
  year: String,
  instagram: String,
  facebook: String,
  linkedIn: String,
  twitter: String,
  portfolio: String,
  image: String,
  session: String,
});

const Member = mongoose.model("Member", memberSchema);

module.exports = Member;
