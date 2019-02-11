describe("Managing account and statement printing", function() {

  let account;
  let dateDeposit1;
  let dateDeposit2;
  let dateWithdrawal;

  beforeEach(function() {
    dateDeposit1 = "10/01/2012";
    dateDeposit2 = "13/01/2012";
    dateWithdrawal = "14/01/2012";
    account = new Account();
  })

  // As a user
  // So that I can easily manage my financial resources
  // I want to be able to add and withdraw money from my account.

  describe("Manage financial resources", function() {
    it("allows the user to deposit and withdraw money from the account", function() {
      account.deposit(dateDeposit1, 1000);
      account.deposit(dateDeposit2, 2000);
      account.withdraw(dateWithdrawal, 500);
      expect(account.list).toEqual({ "10/01/2012": 1000,
        "13/01/2012": 2000,
        "14/01/2012": -500
      })
    })
  })


  // As a user
  // So that I can see how my current financial situation looks like
  // I want to be able to print my statement showing the date, amount and balance for each withdrawal or deposit.


})
