import { createMigration } from '@src/create-migration'

describe('createMigration', () => {
  test('semverCondition matched', async () => {
    const fn = jest.fn()
    const migrate = createMigration('^1.0.0', '2.0.0', fn)

    const result = await migrate('1.0.1')

    expect(result).toStrictEqual('2.0.0')
    expect(fn).toBeCalled()
  })

  test('semverCondition does not matched', async () => {
    const fn = jest.fn()
    const migrate = createMigration('^1.0.0', '2.0.0', fn)

    const result = await migrate('2.0.1')

    expect(result).toStrictEqual('2.0.1')
    expect(fn).not.toBeCalled()
  })
})
