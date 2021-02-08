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
	  { new: true, runValidators:true }
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
  res.json({ message: "bank deleted", data: deletedBank });
};

module.exports = {
  listBanksController,
  updateBankController,
  deleteBankController,
  createBankController,
};
