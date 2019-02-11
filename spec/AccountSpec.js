describe("Account", function() {

  let account;

  beforeEach(function() {
    account = new Account();
  })

  describe("Deposit", function() {
    it("allows the user to deposit money in the account", function() {
      account.deposit("10/01/2012", 1000);
      expect(account.list[0].date).toEqual("10/01/2012")
      expect(account.list[0].amount).toEqual(1000)
    })
  })

  describe("Withdraw", function() {
    it("allows the user to withdraw money from the account", function() {
      account.withdraw("14/01/2012", 500);
      expect(account.list[0].date).toEqual("14/01/2012")
      expect(account.list[0].amount).toEqual(-500)
    })
  })

})
