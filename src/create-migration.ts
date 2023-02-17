import { Awaitable } from 'justypes'
import semver from 'semver'

export function createMigration(
  semverCondition: string
, resultVersion: string
, fn: () => Awaitable<void>
): (currentVersion: string) => Promise<string> {
  return async (currentVersion: string): Promise<string> => {
    if (semver.satisfies(currentVersion, semverCondition)) {
      await fn()
      return resultVersion
    } else {
      return currentVersion
    }
  }
}
