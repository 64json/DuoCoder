const get = require('./ajax/get');

module.exports = (category, language) => {
  let path = `${language.ext}/code.${language.ext}`;
  do {
    path = category.dir + '/' + path;
    category = category.parent;
  } while (category);
  return get(`./data/${path}`);
};