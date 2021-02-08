//Be able to do:
/**
 * Create a bank
 * update a bank-details
 * delete a bank
 * Access a list of banks created
 * account number
 */

/**
 * Name
 * phone
 * address
 * location
 * branch
 */

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://ahmed:12345678_@cluster0.nsezm.mongodb.net/bank?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
);

const {
  listBanksController,
  updateBankController,
  deleteBankController,
  createBankController,
  listAccountController,
  createAccountController,
  updateAccountController,
  deleteAccountController,
} = require("./controllers");

//Middlerwares
app.use(bodyParser.json());

//Routes
app.get("/bank", listBanksController);
app.post("/bank", createBankController);
app.put("/bank", updateBankController);
app.delete("/bank", deleteBankController);
app.get("/account", listAccountController);
app.post("/account", createAccountController);
app.put("/account", updateAccountController);
app.delete("/account", deleteAccountController);

app.listen(3005, () => console.log("Server running"));
