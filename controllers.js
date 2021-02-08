//Controller
const Bank = require("./bankModel");
const Account = require("./accountModel");

const listBanksController = (req, res) => {
  //List all banks
  const banks = Bank.find()
    .populate("accounts")
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

const updateBankController = async (req, res) => {
  //Create bank
  const {
    name,
    location,
    branch,
    phone,
    address,
    accountNumber,
    _id,
  } = req.body;

  if (!_id) {
    return res.status("400").json({ message: "You need to provide an ID" });
  }

  try {
    const updatedBank = await Bank.findByIdAndUpdate(
      _id,
      {
        name,
        location,
        branch,
        phone,
        address,
        accountNumber,
      },
      { new: true, runValidators: true }
    );
    console.log(updatedBank);
    if (updatedBank) {
      return res.json({ message: "update succefull", data: updatedBank });
    }
    res.json({ message: "No bank with that ID found" });
  } catch (error) {
    console.log(error);
    res.status("400").json({ message: "An error occured", error: error });
  }
};

const deleteBankController = async (req, res) => {
  //Create bank
  const { _id } = req.body;
  const deletedBank = await Bank.findByIdAndDelete(_id);
  if (deletedBank) {
	  Account.deleteMany({bankId: deletedBank._id});
  }
  res.json({ message: "bank deleted", data: deletedBank });
};

const createAccountController = (req, res) => {
  const { accountName, accountType, accountNumber, bankId } = req.body;
  const account = new Account({
    accountName,
    accountType,
    accountNumber,
    bankId,
  });
  account.save();
  res.json({ message: "account created successful", data: account });
};

const listAccountController = async (req, res) => {
  const accounts = await Account.find().populate("bankId");
  res.json({ data: accounts });
};

const updateAccountController = async (req, res) => {
  const { _id, accountName, accountType, accountNumber, bankId } = req.body;

  if (!_id) {
    return res.status("400").json({ message: "You need to provide an ID" });
  }

  try {
    const updatedAccount = await Account.findByIdAndUpdate(
      _id,
      {
        accountName,
        accountType,
        accountNumber,
        bankId,
      },
      { new: true, runValidators: true }
    );
    if (updatedAccount) {
      return res.json({ message: "update succefull", data: updatedAccount });
    }
    res.json({ message: "No account with that ID found" });
  } catch (error) {
    console.log(error);
    res.status("400").json({ message: "An error occured", error: error });
  }
};

const deleteAccountController = async (req, res) => {
  const { _id } = req.body;
  const deletedAccount = await Account.findByIdAndDelete(_id);
  res.json({ message: "account deleted", data: deletedAccount });
};

module.exports = {
  listBanksController,
  updateBankController,
  deleteBankController,
  createBankController,
  createAccountController,
  listAccountController,
  updateAccountController,
  deleteAccountController,
};
