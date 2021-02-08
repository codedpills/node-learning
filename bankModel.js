const mongoose = require("mongoose");

const { Schema } = mongoose;

const bankSchema = new Schema({
  name: String,
  location: String,
  branch: String,
  phone: Number,
  address: String,
  accounts: [{ type: Schema.Types.ObjectId, ref: "Account" }],
});

const Bank = mongoose.model('Bank', bankSchema);

module.exports = Bank;
