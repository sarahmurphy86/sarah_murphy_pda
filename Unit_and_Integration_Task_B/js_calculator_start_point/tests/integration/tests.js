var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it('should update the display when the add operator is used', function () {
   running_total = element(by.css('#running_total'));
   element(by.css('#number1')).click();
   element(by.css('#operator_add')).click();
   element(by.css('#number2')).click();
   element(by.css('#operator_equals')).click();
   expect(running_total.getAttribute('value')).to.eventually.equal('3');
 });

 it('should update the display when the subtract operator is used if the result is positive', function () {
  running_total = element(by.css('#running_total'));
  element(by.css('#number4')).click();
  element(by.css('#operator_subtract')).click();
  element(by.css('#number2')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('2');
 });

 it('should update the display when the subtract operator is used if the result is negative', function () {
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

 it('should update the display when the divide operator is used to display an integer', function () {
  running_total = element(by.css('#running_total'));
  element(by.css('#number6')).click();
  element(by.css('#operator_divide')).click();
  element(by.css('#number3')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('2');
 });

 it('should update the display when the divide operator is used to display a decimal', function () {
  running_total = element(by.css('#running_total'));
  element(by.css('#number5')).click();
  element(by.css('#operator_divide')).click();
  element(by.css('#number2')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('2.5');
 });

  it('should update the display when multiple number buttons are clicked', function () {
   running_total = element(by.css('#running_total'));
   element(by.css('#number1')).click();
   element(by.css('#number2')).click();
   element(by.css('#number3')).click();
   expect(running_total.getAttribute('value')).to.eventually.equal('123');
 });

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

});
