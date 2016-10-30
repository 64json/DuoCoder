const RSVP = require('rsvp');
const DOM = require('./dom');
const Server = require('./server');
const app = require('./app');
const App = require('./app/constructor');
const {extend} = $;

const categories = Server.getCategories();
const languages = Server.getLanguages();
const from = 0, to = 1;

// set global promise error handler
RSVP.on('error', function (reason) {
  console.assert(false, reason);
});

extend(true, window, {
  main: DOM.setupMain,
  learn: () => {
    extend(true, app, new App());
    app.setEditor(from, DOM.initEditor(from, languages[0], DOM.viewComparison));
    app.setEditor(to, DOM.initEditor(to, languages[1], DOM.viewComparison));
    DOM.initCategories(categories);
    DOM.setupLayout();
    DOM.setLanguage(from, languages[0]);
    DOM.setLanguage(to, languages[1]);
  }
});