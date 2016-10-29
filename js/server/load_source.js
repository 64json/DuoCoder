const get = require('./ajax/get');

module.exports = (category, subcategory, language) => {
  return get(`./data/${category}/${subcategory}/${language}/source.${language}`);
};