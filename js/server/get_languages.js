const {
  Language
} = require('../bean');

module.exports = () => {
  return languages;
};

const languages = [
  new Language('C++', 'c_cpp', 'cpp'),
  new Language('Python', 'python', 'py'),
  new Language('Java', 'java', 'java'),
  new Language('EMCAScript', 'javascript', 'js'),
  new Language('Nada.', null, 'idk')
];