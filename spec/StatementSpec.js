describe('Statement', function () {
  let account = { list: [ { amount: 1000, date: '10/01/2012' },
    { amount: 2000, date: '13/01/2012' },
    { amount: -500, date: '14/01/2012' } ],
  balance: [1000, 3000, 2500]
  }

  let statement = new Statement(account)

  describe('print', function () {
    it('allows the user to print his statement', function () {
      expect(statement.print()).toEqual(
        'date || credit || debit || balance' + '\n' +
      '14/01/2012 || || 500.00 || 2500.00' + '\n' +
      '13/01/2012 || 2000.00 || || 3000.00' + '\n' +
      '10/01/2012 || 1000.00 || || 1000.00')
    })
  })

  describe('generateLine', function () {
    it('generates the individual line for the statement', function () {
      expect(statement.generateLine(0)).toEqual(
      '\n'+ '10/01/2012 || 1000.00 || || 1000.00')
      expect(statement.generateLine(2)).toEqual(
      '\n'+ '14/01/2012 || || 500.00 || 2500.00')
    })
  })
})
