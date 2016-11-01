const {
  Language
} = require('../bean');

module.exports = () => {
  return languages;
};

const languages = [
  new Language('C++', 'c_cpp', 'cpp'),
  new Language('Python', 'python', 'py'),
  new Language('Java', 'java', 'java', false),
  new Language('ECMAScript', 'javascript', 'js', false),
  new Language('Nada.', null, 'idk', false)
];