const {set, get} = require('./manager');

const getName = index => {
  return `lang_${index}`;
};

module.exports = {
  set: (index, ext) => {
    return set(getName(index), ext);
  },
  get: (index) => {
    return get(getName(index));
  }
};