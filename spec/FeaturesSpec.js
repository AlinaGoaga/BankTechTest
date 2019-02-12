describe("Managing financial resources and statement printing", function() {

  let account;
  let statement;

  beforeEach(function() {
    account = new Account();
    account.deposit("10/01/2012", 1000);
    account.deposit("13/01/2012", 2000);
    account.withdraw("14/01/2012", 500);
    statement = new Statement(account);
  })

  // As a user
  // So that I can easily manage my financial resources
  // I want to be able to add and withdraw money from my account.

  describe("Manage financial resources", function() {
    it("allows the user to deposit and withdraw money from the account", function() {
      expect(account.list[0].date).toEqual("10/01/2012")
      expect(account.list[0].amount).toEqual(1000)
      expect(account.list[1].date).toEqual("13/01/2012")
      expect(account.list[1].amount).toEqual(2000)
      expect(account.list[2].date).toEqual("14/01/2012")
      expect(account.list[2].amount).toEqual(-500)
    })
  })

  // As a user
  // So that I can see how much money I have
  // I want to be able to calculate my balance

  describe("Calculate balance", function() {
    it("allows the user calculate the balance on the account", function() {
      expect(account.calculateBalance()).toEqual([1000,3000,2500])
    })
  })

  // As a user
  // So that I can see how my current financial situation looks like
  // I want to be able to print my statement showing the date, amount and balance for each withdrawal or deposit.

  describe("Statement printing", function() {
    it("allows the user to print his statement", function() {
      account.calculateBalance();
      expect(statement.print()).toEqual(
        "date || credit || debit || balance" + "\n" +
        "14/01/2012 || || 500.00 || 2500.00" + "\n" +
        "13/01/2012 || 2000.00 || || 3000.00" + "\n" +
        "10/01/2012 || 1000.00 || || 1000.00")
      })
    })

  })
