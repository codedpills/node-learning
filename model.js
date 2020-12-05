let banksDb = require('./db');
//Models
class BankModel1 {
	constructor({ name, location, branch, phone, address, accountNumber }) {
		this.name = name;
		this.location = location;
		this.branch = branch;
		this.phone = phone;
		this.address = address;
		this.accountNumber = accountNumber;
	}
	save() {
		banksDb.push(this);
		return this;
	}
	static all() {
		return banksDb;
	}

	static update(updateInfo = {}) {
		//Find the data
		banksDb = banksDb.map((bank) => {
			if (bank.name === updateInfo.name) {
				return { ...bank, updateInfo };
			}
			return bank;
		});
	}

	static delete({ name }) {
		let deletedBank = null;
		banksDb.filter((bank) => {
			if (bank.name !== name) {
				return true;
			}
			deletedBank = bank;
			return false;
		});
		return deletedBank;
	}
}

module.exports = BankModel1;
