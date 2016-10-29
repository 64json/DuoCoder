const RSVP = require('rsvp');
const DOM = require('./dom');
const Server = require('./server');
const {
  Language
} = require('./bean');

const {
  extend
} = $;

const langCpp = new Language('C++', 'c_cpp', 'cpp');
const langPy = new Language('Python', 'python', 'py');
const langJava = new Language('Java', 'java', 'java');
const langJs = new Language('EMCAScript', 'javascript', 'js');

const categories = Server.getCategories();

const setLanguage = (index, category, language) => {
  DOM.setLanguage(index, language);
  Server.loadCode(category, language).then((code) => {
    DOM.viewCode(index, language, code);
  });
  Server.loadDesc(category, language).then((desc) => {
    DOM.viewDesc(index, desc)
  })
};

$(() => {
  DOM.initCategories(categories);
  setLanguage(0, categories[0].sub(0), langCpp);
  setLanguage(1, categories[0].sub(0), langPy);
});

extend(true, window, {
  DOM
});