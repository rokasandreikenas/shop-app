import {arraySum} from '../src/utils/number';

test('array sum', () => {
  expect(arraySum([0, 1, 2, 3])).toBe(6);
  expect(arraySum([0])).toBe(0);
  expect(arraySum([])).toBe(0);
  expect(arraySum([0, 1, 2, -1])).toBe(2);
});
