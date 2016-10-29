const RSVP = require('rsvp');
const DOM = require('./dom');
const Server = require('./server');

const categories = Server.getCategories();
const languages = Server.getLanguages();

// set global promise error handler
RSVP.on('error', function (reason) {
  console.assert(false, reason);
});

$(() => {
  DOM.initCategories(categories);
  DOM.setupLayout();
  DOM.setLanguage(0, languages[0]);
  DOM.setLanguage(1, languages[1]);
});