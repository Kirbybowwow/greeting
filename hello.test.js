var utils  = require('course-utilities');
var hello = utils.load('./hello.js', 'hello');
var sum = utils.load('./hello.js', 'sum')

test('outputs the correct string', () => {
  expect(hello()).toBe("This will be a passing test!");
});

test('outputs the correct number', () => {
  expect(sum()).toBe(5);
});