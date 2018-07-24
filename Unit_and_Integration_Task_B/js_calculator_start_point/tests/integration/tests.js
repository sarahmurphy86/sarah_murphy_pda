var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

// Do the number buttons work to update the display of the running total?
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number1')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('1')
  })

  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number3')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('3')
  })

  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number4')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('4')
  })

  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number5')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('5')
  })

  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number6')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('6')
  })

  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number7')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('7')
  })

  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number8')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('8')
  })

  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number9')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('9')
  })

  it('should update the display when multiple number buttons are clicked', function () {
   running_total = element(by.css('#running_total'));
   element(by.css('#number1')).click();
   element(by.css('#number2')).click();
   element(by.css('#number3')).click();
   element(by.css('#number4')).click();
   element(by.css('#number5')).click();
   element(by.css('#number6')).click();
   element(by.css('#number7')).click();
   element(by.css('#number8')).click();
   element(by.css('#number9')).click();
   element(by.css('#number0')).click();
   expect(running_total.getAttribute('value')).to.eventually.equal('1234567890');
 });

// Do each of the arithmetical operations work to update the display with the result of the operation?
  it('should update the display when the add operator is used', function () {
   running_total = element(by.css('#running_total'));
   element(by.css('#number1')).click();
   element(by.css('#operator_add')).click();
   element(by.css('#number2')).click();
   element(by.css('#operator_equals')).click();
   expect(running_total.getAttribute('value')).to.eventually.equal('3');
 });

// very large number
 it('should update the display when the add operator is used for very large numbers', function () {
  running_total = element(by.css('#running_total'));
  element(by.css('#number9')).click();
  element(by.css('#number9')).click();
  element(by.css('#number9')).click();
  element(by.css('#number9')).click();
  element(by.css('#number9')).click();
  element(by.css('#operator_add')).click();
  element(by.css('#number1')).click();
  element(by.css('#number2')).click();
  element(by.css('#number3')).click();
  element(by.css('#number4')).click();
  element(by.css('#number5')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('112344');
});

// positive
 it('should update the display when the subtract operator is used when the result is positive', function () {
  running_total = element(by.css('#running_total'));
  element(by.css('#number4')).click();
  element(by.css('#operator_subtract')).click();
  element(by.css('#number2')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('2');
 });

// negative
 it('should update the display when the subtract operator is used when the result is negative', function () {
  running_total = element(by.css('#running_total'));
  element(by.css('#number4')).click();
  element(by.css('#operator_subtract')).click();
  element(by.css('#number6')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('-2');
 });

 it('should update the display when the multiply operator is used', function () {
  running_total = element(by.css('#running_total'));
  element(by.css('#number3')).click();
  element(by.css('#operator_multiply')).click();
  element(by.css('#number3')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('9');
 });

 it('should update the display when the divide operator is used when the result is an integer', function () {
  running_total = element(by.css('#running_total'));
  element(by.css('#number6')).click();
  element(by.css('#operator_divide')).click();
  element(by.css('#number3')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('2');
 });

// decimal
 it('should update the display when the divide operator is used when the result is a decimal', function () {
  running_total = element(by.css('#running_total'));
  element(by.css('#number5')).click();
  element(by.css('#operator_divide')).click();
  element(by.css('#number2')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('2.5');
 });

// Can we chain multiple operations together?
 it('should update the display when multiple operations are used', function () {
  running_total = element(by.css('#running_total'));
  element(by.css('#number1')).click();
  element(by.css('#number0')).click();
  element(by.css('#operator_add')).click();
  element(by.css('#number3')).click();
  element(by.css('#operator_subtract')).click();
  element(by.css('#number5')).click();
  element(by.css('#operator_divide')).click();
  element(by.css('#number2')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('4');
});

it('should update the display to show zero when the clear button is pressed', function () {
 running_total = element(by.css('#running_total'));
 element(by.css('#number1')).click();
 element(by.css('#number0')).click();
 element(by.css('#operator_add')).click();
 element(by.css('#number2')).click();
 element(by.css('#operator_add')).click();
 element(by.css('#number2')).click();
 element(by.css('#clear')).click();
 expect(running_total.getAttribute('value')).to.eventually.equal('0');
});


  // If you divide by zero, what is the effect?
  // The calculator displays 'inifinity' - the test below has been commented out because I have now changed the display from 'infinity' to 'error' and the below now fails

// it('should update the display to show infinity when you use the divide operator to divide by zero', function () {
//    running_total = element(by.css('#running_total'));
//    element(by.css('#number1')).click();
//    element(by.css('#operator_divide')).click();
//    element(by.css('#number0')).click();
//    element(by.css('#operator_equals')).click();
//    expect(running_total.getAttribute('value')).to.eventually.equal('Infinity');
// });


// Can you write a test to describe what you'd prefer to happen, and then correct the code to make that test pass.
// I have changed the display message from inifinity to 'error'

it('should update the display to show an error message when you use the divide operator to divide by zero', function () {
   running_total = element(by.css('#running_total'));
   element(by.css('#number1')).click();
   element(by.css('#operator_divide')).click();
   element(by.css('#number0')).click();
   element(by.css('#operator_equals')).click();
   expect(running_total.getAttribute('value')).to.eventually.equal('Error');
});


});
