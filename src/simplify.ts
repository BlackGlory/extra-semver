import { parse } from 'semver'
import { assert } from '@blackglory/errors'

export function simplify(version: string): string {
  const semver = parse(version)
  assert(semver, 'version must be valid semver')

  return semver.major === 0
       ? `${semver.major}.${semver.minor}`
       : `${semver.major}`
}
