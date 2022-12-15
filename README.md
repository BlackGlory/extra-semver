# extra-semver
## Install
```sh
npm install --save extra-semver
# or
yarn add extra-semver
```

## API
### simplify
```ts
function simplify(version: string): string

expect(simplify('1.0.0')).toBe('1')
expect(simplify('1.1.0')).toBe('1')
expect(simplify('0.1.0')).toBe('0.1')
```
