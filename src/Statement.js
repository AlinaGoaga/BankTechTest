class Statement {

  constructor(account = new Account) {
    this.account = account;
  }

  print() {
    let l = this.account.list.length;
    let printed = "date || credit || debit || balance";
    for (var i = l-1; i >= 0 ; i--) {
      let date = this.account.list[i].date;
      let amount = this.account.list[i].amount.toFixed(2);
      let balance = this.account.balance[i].toFixed(2);
      if (amount > 0) {
        printed = printed + "\n" + `${date} || ${amount} || || ${balance}`;
      } else {
        amount = -(amount);
        amount = amount.toFixed(2);
        printed =  printed + "\n" + `${date} || || ${amount} || ${balance}`;
      }
    }
    return printed;
  }

}
