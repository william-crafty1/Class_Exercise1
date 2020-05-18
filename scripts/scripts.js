class BankAccount {
    constructor(balance, intrestRate) {
        this.balance = balance;
        this.intrestRate = intrestRate;
    }

    addIntrest() {
        this.balance += this.balance * (this.intrestRate / 100);
        return this.balance;
    }

    makeDeposit(amount){
        this.balance = this.balance + amount;
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

const Account1 = new BankAccount(25.00, 5.00);
console.log(`Current balance after adding Intrest Rate: $${Account1.addIntrest()}`);
console.log(`The Balance after depositing: $${Account1.makeDeposit(50)}`)

const Account2 = new BankAccountWithFee(10, 25.00, 5.00);
console.log(`Current Balance after fee: $${Account2.applyFee()}`);
console.log(`Current balance after adding intrest rate: $${Account2.addIntrest()}`);
