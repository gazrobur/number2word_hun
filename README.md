## Installing

---

Using npm:

```console
$ npm i --save number2word_hun
```
## Example

---

### note: CommonJS usage

```javascript
// Load the package.
var number2wordHun = require("number2word_hun");

// Convert number to words.
const positiveNum = number2wordHun.numberToWordHun(200);
// kettőszáz

const negativeNum = number2wordHun.numberToWordHun(-200);
// mínusz kettőszáz
```

### note: Node.js usage:

```typescript
// Load the package.
import { numberToWordHun } = from 'number2word_hun';

// Convert number to words.
const positiveNum: string = numberToWordHun(200);
// kettőszáz

const negativeNum: string = numberToWordHun(-200);
// mínusz kettőszáz
```

## License

---

[MIT](LICENSE)