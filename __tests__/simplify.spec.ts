import { simplify } from '@src/simplify'

test('simplify', () => {
  expect(simplify('1.0.0')).toBe('1')
  expect(simplify('1.1.0')).toBe('1')
  expect(simplify('0.1.0')).toBe('0.1')
})
