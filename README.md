# say-promise

> Promise version of say


## Install

```
$ npm install --save say-promise
```


## Usage

```js
const sayp = require('say-promise');

// Simple usage
sayp.speak("Some text to speech").then(() => console.log("ready"));

// With all arguments
sayp.speak(text, voice, speed).then(() => ...);

// Chained says
sayp.speak("text").then(() => sayp.speak("text two"));

```


## API

Same as the say.js, see [official repo](https://www.npmjs.com/package/say)

## License

MIT
