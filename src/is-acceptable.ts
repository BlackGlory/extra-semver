import semver from 'semver'
import { assert } from '@blackglory/errors'

export function isAcceptable(version: string, expectedVersion: string): boolean {
  assert(/^\d+\.\d+\.\d+$/.test(expectedVersion), 'expectedVersion must match /^\\d+\\.\\d+\\.\\d+$/')
  return semver.satisfies(version, `^${expectedVersion}`)
}
