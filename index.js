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
  "mongodb+srv://ahmed:p455w0rd@cluster0.nsezm.mongodb.net/bank?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const {
  listBanksController,
  updateBankController,
  deleteBankController,
  createBankController,
} = require("./controllers");

//Middlerwares
app.use(bodyParser.json());

//Routes
app.get("/bank", listBanksController);
app.post("/bank", createBankController);
app.put("/bank", updateBankController);
app.delete("/bank", deleteBankController);

app.listen(3005, () => console.log("Server running"));
