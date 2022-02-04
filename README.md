# extra-semver
## Install
```sh
npm install --save extra-semver
# or
yarn add extra-semver
```

## API
### isAcceptable
```ts
function isAcceptable(version: string, expectedVersion: string): boolean

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
```

### simplify
```ts
function simplify(version: string): string

expect(simplify('1.0.0')).toBe('1')
expect(simplify('1.1.0')).toBe('1')
expect(simplify('0.1.0')).toBe('0.1')
```
