import Validator from '../validator';

test('check nickname', () => {
  const warrior = new Validator('Oleg');
  expect(warrior.validateUsername()).toBe('Никнейм в порядке');
});

test('check err nickname', () => {
  const warrior = new Validator('Oleg2');
  expect(warrior.validateUsername()).toBe('Недопустимый никнейм');
});

test('check err nickname', () => {
  const warrior = new Validator('Ol7777eg');
  expect(warrior.validateUsername()).toBe('Недопустимый никнейм');
});

test('check err nickname', () => {
  const warrior = new Validator('Ol+eg');
  expect(warrior.validateUsername()).toBe('Недопустимый никнейм');
});
