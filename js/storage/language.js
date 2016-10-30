const {set, get} = require('./manager');
const Server = require('../server');

const languages = Server.getLanguages();

const getName = index => {
  return `lang_${index}`;
};

module.exports = {
  set: (index, language) => {
    return set(getName(index), language.ext);
  },
  get: (index) => {
    const ext = get(getName(index));
    for (const language of languages) {
      if (language.ext == ext) return ext;
    }
  }
};