# progressive-morpher

This was initially used to animate the transition steps between anagrams, however works with other strings as well.

## Examples

```javascript
const morpher = require('progressive-string-morpher');

const transition = morpher.stringMorphTransition("More", "Rome");

while(transition.next()) {
    console.log(transition.current());
}
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

This can then be used for animated text and other uses. Please share your usages with [@aggronerd](https://twitter.com/aggronerd) on twitter.

## Installation

Using Yarn:

```bash
yarn add progressive-string-morpher
```

Using NPM:

```bash
npm install progressive-string-morpher
```

## Contributing

PRs welcome if you have any changes in mind.