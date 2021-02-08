const mongoose = require("mongoose");

const { Schema } = mongoose;

const accountShema = new Schema({
  accountName: String,
  accountNumber: String,
  accountType: String,
  bankId: {
    type: Schema.Types.ObjectId,
    ref: "Bank",
  },
});

const Account = mongoose.model('Account', accountShema);

module.exports = Account;
