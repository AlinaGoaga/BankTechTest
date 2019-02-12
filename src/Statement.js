class Statement {
  constructor (account = new Account()) {
    this.account = account
  }

  print () {
    let list = this.account.list
    let l = list.length
    let printed = 'date || credit || debit || balance'
    for (var i = l - 1; i >= 0; i--) {
      let date = this.account.list[i].date
      let amount = this.account.list[i].amount
      let balance = this.account.balance[i].toFixed(2)
      if (amount > 0) {
        printed += `\n${date} || ${amount.toFixed(2)} || || ${balance}`
      } else {
        printed += `\n${date} || || ${(-amount).toFixed(2)} || ${balance}`
      }
    }
    return printed
  }
}
