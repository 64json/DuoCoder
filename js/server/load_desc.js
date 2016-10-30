const get = require('./ajax/get');

module.exports = (category, language) => {
  let path = `${language.ext}/desc.md`;
  do {
    path = category.dir + '/' + path;
    category = category.parent;
  } while (category);
  return get(`./data/${path}`);
};