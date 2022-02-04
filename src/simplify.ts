import { parse } from 'semver'
import { assert } from '@blackglory/errors'

export function simplify(version: string): string {
  const semver = parse(version)
  assert(semver, 'version must be valid semver')
  if (semver.major === 0) {
    return `${semver.major}.${semver.minor}`
  } else {
    return `${semver.major}`
  }
}
