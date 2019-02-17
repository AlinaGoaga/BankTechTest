class Account {
  constructor () {
    this.list = []
    this.balance = []
  }

  deposit (amount, date = (new Date).toLocaleDateString()) {
    this.list.push({ amount: amount, date: date })
    return this.list
  }

  withdraw (amount, date = (new Date).toLocaleDateString()) {
    this.list.push({ amount: -amount, date: date })
    return this.list
  }

  calculateBalance () {
    let l = this.list.length
    this.balance[0] = this.list[0].amount
    for (var i = 1; i < l; i++) {
      this.balance.push(this.list[i].amount + this.balance[i - 1])
    }
    return this.balance
  }
}
