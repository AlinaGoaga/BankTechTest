class Account {
  constructor() {
    this.list = [];
  }

  deposit(date, amount) {
    this.list.unshift({date: date, amount: amount});
    return this.list;
  }

  withdraw(date, amount) {
    this.list.unshift({date: date, amount: -amount});
    return this.list;
  }

}
