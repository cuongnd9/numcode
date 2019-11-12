import { numcode } from '../src';

test('should create a number numcode', () => {
  expect(typeof numcode(2)).toEqual('string');
  expect(typeof numcode(10)).toEqual('string');
  expect(typeof numcode()).toEqual('string');
  expect(typeof numcode(4)).toEqual('string');
  expect(typeof numcode(5)).toEqual('string');
  expect(typeof numcode(6)).toEqual('string');

  expect(numcode(2)).toHaveLength(4);
  expect(numcode(10)).toHaveLength(4);
  expect(numcode()).toHaveLength(4);
  expect(numcode(4)).toHaveLength(4);
  expect(numcode(5)).toHaveLength(5);
  expect(numcode(6)).toHaveLength(6);

  const samplenumcode = numcode().toString();
  expect(samplenumcode.charAt(1)).toBe(samplenumcode.charAt(2))
});