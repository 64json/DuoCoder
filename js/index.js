const RSVP = require('rsvp');
const DOM = require('./dom');
const Server = require('./server');
const {
  Language,
  Category
} = require('./bean');

const {
  extend
} = $;

const langCpp = new Language('C++', 'c_cpp', 'cpp');
const langPy = new Language('Python', 'python', 'py');
const langJava = new Language('Java', 'java', 'java');
const langJs = new Language('EMCAScript', 'javascript', 'js');

const categories = [
  new Category('Variables', 'variable', [
    new Category('Definition', 'definition'),
    new Category('Boolean Type', 'boolean'),
    new Category('Numeric Types', 'numeric'),
    new Category('Strings', 'string'),
    new Category('Data Structures', 'data_structure'),
    new Category('Constants', 'constant')
  ])
];

const setLanguage = (index, category, language) => {
  DOM.setLanguage(index, language);
  Server.loadSource(category, language).then((source) => {
    DOM.viewCode(index, language, source);
  });
};

$(() => {
  setLanguage(0, categories[0].sub(0), langCpp);
  setLanguage(1, categories[0].sub(0), langPy);
});

extend(true, window, {
  DOM
});