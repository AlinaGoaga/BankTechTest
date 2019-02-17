describe("Account", function() {

  let account;

  beforeEach(function() {
    account = new Account();
  })

  describe("Deposit", function() {
    it("allows the user to deposit money in the account", function() {
      account.deposit(1000, "10/01/2012");
      expect(account.list[0].date).toEqual("10/01/2012")
      expect(account.list[0].amount).toEqual(1000)
    })
  })

  describe("Withdraw", function() {
    it("allows the user to withdraw money from the account", function() {
      account.withdraw(500, "14/01/2012");
      expect(account.list[0].date).toEqual("14/01/2012")
      expect(account.list[0].amount).toEqual(-500)
    })
  })

  describe("Balance", function() {
    it("allows the user to calculate the balance on the account", function() {
      account.deposit(1000, "10/01/2012");
      account.withdraw(500, "14/01/2012");
      expect(account.calculateBalance()).toEqual([1000,500])
    })
  })

})
