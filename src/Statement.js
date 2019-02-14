class Statement {
  constructor (account = new Account()) {
    this.account = account
  }

  print () {
    let l = this.account.list.length;
    let statement = 'date || credit || debit || balance'
    for (var i = l - 1; i >= 0; i--) {
       statement += this.generateLine(i);
    }
    return statement
    }

  generateLine (i) {
    let date = this.account.list[i].date
    let amount = this.account.list[i].amount
    let balance = this.account.balance[i].toFixed(2)
    return (amount > 0) ? `\n${date} || ${amount.toFixed(2)} || || ${balance}` :
        `\n${date} || || ${(-amount).toFixed(2)} || ${balance}`;
  }

}
