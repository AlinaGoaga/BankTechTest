class Account {
  constructor() {
    this.list = [];
    this.balance = [];
  }

  deposit(date, amount) {
    this.list.unshift({date: date, amount: amount});
    return this.list;
  }

  withdraw(date, amount) {
    this.list.unshift({date: date, amount: -amount});
    return this.list;
  }

  calculateBalance() {
    let l = this.list.length;
    let reversedList = this.list.reverse();
    this.balance[0] = reversedList[0].amount;
    for (var i = 1; i < l; i++) {
      this.balance.push(reversedList[i].amount + this.balance[i-1]);
    }
    return this.balance.reverse();
  }

}
