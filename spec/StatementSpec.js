describe('Statement', function () {
  let account = { list: [ { date: '10/01/2012', amount: 1000 },
    { date: '13/01/2012', amount: 2000 },
    { date: '14/01/2012', amount: -500 } ],
  balance: [1000, 3000, 2500]
  }

  let statement = new Statement(account)

  describe('Print', function () {
    it('allows the user to print his statement', function () {
      expect(statement.print()).toEqual(
        'date || credit || debit || balance' + '\n' +
      '14/01/2012 || || 500.00 || 2500.00' + '\n' +
      '13/01/2012 || 2000.00 || || 3000.00' + '\n' +
      '10/01/2012 || 1000.00 || || 1000.00')
    })
  })
})
