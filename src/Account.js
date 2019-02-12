class Account {
  
  constructor () {
    this.list = []
    this.balance = []
  }

  deposit (date = (new Date()).toLocaleDateString(), amount) {
    this.list.push({ date: date, amount: amount })
    return this.list
  }

  withdraw (date = (new Date()).toLocaleDateString(), amount) {
    this.list.push({ date: date, amount: -amount })
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
