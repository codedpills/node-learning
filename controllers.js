//Controller
const BankModel1 = require('./model');
const listBanksController = (req, res) => {
	//List all banks
	const banks = BankModel1.all();
	res.json({ data: banks });
};

const createBankController = (req, res) => {
	//Create bank
	const { name, location, branch, phone, address, accountNumber } = req.body;
	const bank = new BankModel1({
		name,
		location,
		branch,
		phone,
		address,
		accountNumber,
	});
	bank.save();
	res.json({ message: 'create successful', data: bank });
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

	res.json({ message: 'update succefull', data: updatedBank });
};

const deleteBankController = (req, res) => {
	//Create bank
	const { name } = req.body;
	const deletedBank = BankModel1.delete({ name });
	res.json({ message: 'bank deleted', data: deletedBank });
};

module.exports = {
	listBanksController,
	updateBankController,
	deleteBankController,
	createBankController,
};
