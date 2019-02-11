class Account {
  constructor() {
    this.list = {};
  }

  deposit(date, amount) {
    this.list[date] = amount;
  }

  withdraw(date, amount) {
    this.list[date] = -amount;
  }

}
