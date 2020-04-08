# String Morphing.

This was initially used to animate the transition steps between anagrams, however works with other strings as well. It 
does a [bubble sort](https://en.wikipedia.org/wiki/Bubble_sort) to shuffle the characters around to match the target 
string. It also does some pre and post processing to support missing characters and casing inconsistencies.

This can then be used for animated text and other uses. Please share your usages with 
[@aggronerd](https://twitter.com/aggronerd) on Twitter.

## Examples

```javascript
const {morph} = require('progressive-string-morpher');

const transition = morph("More", "Rome!");

do {
    console.log(transition.getCurrentString());
} while (!transition.next());
```

Will output:

```
More
more
omre
orme
rome
rome!
Rome!
```

## Installation

Using Yarn:

```bash
yarn add progressive-string-morpher
```

Using NPM:

```bash
npm install progressive-string-morpher
```

## Development

### Requirements

* Node >= 10.15

### Unit Tests

```bash 
npm run test
```

### Compiling

The following will transpile the Typescript into the packaged Javascript.

```bash
npm run build
```

### Integration Test

This requires the Javascript to be compiled and in the dist folder prior to running.

```bash
npm run integration-test
```

## Contributing

PRs welcome if you have any changes in mind.