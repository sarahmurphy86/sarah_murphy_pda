var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

// calculator.add()
	// add 1+4 and get 5
  it('it should add the numbers one and four together and return five', function(){
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.strictEqual(5, calculator.runningTotal)
  });

	// calculator.subtract()
  // subtract 7-4 and get 3
  it('it should subtract the number four from seven and return three', function(){
    calculator.numberClick(7);
    calculator.operatorClick('-');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.strictEqual(3, calculator.runningTotal)
  });

  // calculator.multiply()
  // multiply 3x5 and get 15
  it('it should multiply the numbers three and five and return fifteen', function(){
    calculator.numberClick(3);
    calculator.operatorClick('*');
    calculator.numberClick(5);
    calculator.operatorClick('=');
    assert.strictEqual(15, calculator.runningTotal)
  });

  // calculator.divide()
  // divide 21/7 and get 3
  it('it should divide 21 by seven and return three', function(){
    calculator.numberClick(2);
    calculator.numberClick(1);
    calculator.operatorClick('/');
    calculator.numberClick(7);
    calculator.operatorClick('=');
    assert.strictEqual(3, calculator.runningTotal)
  });

  // calculator.numberClick()
  // concatenate multiple number button clicks
  it('should concatenate multiple number button clicks', function () {
  calculator.numberClick(2);
  calculator.numberClick(4);
  assert.strictEqual(calculator.runningTotal, 24);
});

  // calculator.operatorClick()
  // chain multiple operations together
  it('should chain operations together', function () {
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(2);
    calculator.operatorClick('-');
    calculator.numberClick(1);
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 2);
  });

  // calculator.clearClick()
  // clear the running total without affecting the calculation
  it('should clear the running total without affecting the calculation', function () {
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(2);
    calculator.operatorClick('+');
    calculator.numberClick(2);
    calculator.clearClick()
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 3);
  });
});
