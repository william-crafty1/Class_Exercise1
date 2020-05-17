class BankAccount {
    constructor(balance, intrestRate) {
        this.balance = balance;
        this.intrestRate = intrestRate;
    }

    addIntrest() {
        this.balance = this.balance + this.intrestRate;
        return this.balance;
    }
}

class BankAccountWithFee extends BankAccount {
    constructor(fee, balance, intrestRate) {
        super(balance, intrestRate);
        this.fee = fee;
    }

    applyFee() {
        this.balance = this.balance - this.fee;
        return this.balance;
    }
}

let Account1 = new BankAccount(50.00 , 5.00);
console.log(`Current balance after adding Intrest Rate: $${Account1.addIntrest()}`);
Account1 = new BankAccountWithFee(25.00, 50.00, 5.00);
console.log(`Current Balance after fee: $${Account1.applyFee()}`);

let Account2 = new BankAccount(9999.99, .99);
console.log(`Current balance after adding intrest rate: $${Account2.addIntrest()}`);
Account2 = new BankAccountWithFee(9998.99, 9999.99, .99);
console.log(`Current Balance after fee: $${Account2.applyFee()}`);
