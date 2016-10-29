const RSVP = require('rsvp');
const DOM = require('./dom');
const Server = require('./server');
const app = require('./app');
const App = require('./app/constructor');
const {extend} = $;

const categories = Server.getCategories();
const languages = Server.getLanguages();

// set global promise error handler
RSVP.on('error', function (reason) {
  console.assert(false, reason);
});

$(() => {
  extend(true, app, new App());
  app.setEditor(0, DOM.initEditor(0, languages[0]));
  app.setEditor(1, DOM.initEditor(1, languages[1]));
  DOM.initCategories(categories);
  DOM.setupLayout();
  DOM.setLanguage(0, languages[0]);
  DOM.setLanguage(1, languages[1]);
});