import { isAcceptable } from '@src/is-acceptable'

test('isAcceptable', () => {
  expect(isAcceptable('1.0.0', '2.0.0')).toBe(false)
  expect(isAcceptable('2.0.0', '1.0.0')).toBe(false)
  expect(isAcceptable('1.0.0', '0.9.0')).toBe(false)
  expect(isAcceptable('1.0.0', '1.0.0')).toBe(true)
  expect(isAcceptable('1.0.0', '1.0.1')).toBe(false)
  expect(isAcceptable('1.0.1', '1.0.0')).toBe(true)
  expect(isAcceptable('1.1.0', '1.0.0')).toBe(true)
  expect(isAcceptable('1.0.0', '0.1.0')).toBe(false)
  expect(isAcceptable('0.1.0', '1.0.0')).toBe(false)
  expect(isAcceptable('0.2.0', '0.1.0')).toBe(false)
  expect(isAcceptable('0.1.0', '0.2.0')).toBe(false)
  expect(isAcceptable('0.1.0', '0.1.0')).toBe(true)
  expect(isAcceptable('0.1.0', '0.1.1')).toBe(false)
  expect(isAcceptable('0.1.1', '0.1.0')).toBe(true)
})
