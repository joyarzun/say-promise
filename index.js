const say = require("say");
const pify = require("pify");

const promise = {
  speak: (text, voice, speed) => pify(say.speak)(text, voice, speed),
  export: (text, voice, speed, file) =>
    pify(say.export)(text, voice, speed, file),
  stop: pify(say.stop)()
};

module.exports = promise;
