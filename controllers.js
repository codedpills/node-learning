//Controller
const Bank = require("./model");
const listBanksController = (req, res) => {
  //List all banks
  const banks = Bank.find()
    .then((banks) => {
      res.status("200").json({ data: banks });
    })
    .catch((err) => {
      res.status("400").json({ message: "An error occured", error: err });
    });
};

const createBankController = (req, res) => {
  //Create bank
  const { name, location, branch, phone, address, accountNumber } = req.body;
  const bank = new Bank({
    name,
    location,
    branch,
    phone,
    address,
    accountNumber,
  });
  bank.save();
  res.json({ message: "create successful", data: bank });
};

const updateBankController = (req, res) => {
  //Create bank
  const { name, location, branch, phone, address, accountNumber } = req.body;

  const updatedBank = BankModel1.update({
    name,
    location,
    branch,
    phone,
    address,
    accountNumber,
  });

  res.json({ message: "update succefull", data: updatedBank });
};

const deleteBankController = (req, res) => {
  //Create bank
  const { name } = req.body;
  const deletedBank = BankModel1.delete({ name });
  res.json({ message: "bank deleted", data: deletedBank });
};

module.exports = {
  listBanksController,
  updateBankController,
  deleteBankController,
  createBankController,
};
