# Bank tech test

## User stories

```
  As a user
  So that I can easily manage my financial resources
  I want to be able to add and withdraw money from my account.
```
```
  As a user
  So that I can see how much money I have
  I want to be able to calculate my balance at any given time.
```
```
  As a user
  So that I can see how my current financial situation looks like
  I want to be able to print my statement showing the date, amount and balance for each withdrawal or deposit.
```

### Example:

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** he prints his bank statement  
**Then** he would see:

```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```

## How to use

* clone the repository
* cd into the repository
* open SpecRunner.html to see the tests
* on the same page, open the console to interact with the application

![Interacting with the app](https://github.com/AlinaGoaga/BankTechTest/blob/master/images/console.jpeg)
