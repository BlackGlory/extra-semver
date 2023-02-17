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
```

```ts
simplify('1.0.0') // '1'
simplify('1.1.0') // '1'
simplify('0.1.0') // '0.1'
```

### createMigration
```ts
function createMigration(
  semverCondition: string
, resultVersion: string
, fn: () => Awaitable<void>
): (currentVersion: string) => Promise<string>
```

```ts
createMigration('^1.0.0', '2.0.0', () => {
  // ...
})
```
