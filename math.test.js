const soma = require('./math');

test('1 + 2 = 3', () => {
  expect(soma(1, 2)).toBe(3);
});
