const RSVP = require('rsvp');
const DOM = require('./dom');
const Server = require('./server');
const Storage = require('./storage');
const app = require('./app');
const App = require('./app/constructor');
const {Language} = require('./bean');
const {extend} = $;

const categories = Server.getCategories();
const from = 0, to = 1;

// set global promise error handler
RSVP.on('error', function (reason) {
  console.assert(false, reason);
});

extend(true, window, {
  main: DOM.setupMain,
  learn: () => {
    extend(true, app, new App());
    extend(true, window, {app});
    let lang_from_ext = getUrlParameter('lang_from');
    let lang_to_ext = getUrlParameter('lang_to');
    if (lang_from_ext && lang_to_ext) {
      const changed =
        Storage.language.set(from, lang_from_ext) ||
        Storage.language.set(to, lang_to_ext);
      if (changed) Storage.category.set(categories[0].sub(0));
    } else {
      lang_from_ext = Storage.language.get(from);
      lang_to_ext = Storage.language.get(to);
    }
    const lang_from = Language.getWithExt(lang_from_ext);
    const lang_to = Language.getWithExt(lang_to_ext);
    app.setLanguage(from, lang_from);
    app.setLanguage(to, lang_to);
    app.setEditor(from, DOM.initEditor(from, lang_from));
    app.setEditor(to, DOM.initEditor(to, lang_to));
    DOM.initCategories(categories);
    DOM.setupLayout();
    DOM.setupMatching();
    DOM.setupExam();
    DOM.setLanguage(from, lang_from);
    DOM.setLanguage(to, lang_to);
  }
});

const getUrlParameter = (sParam) => {
  const params = decodeURIComponent(window.location.search.substring(1)).split('&');
  for (let i = 0; i < params.length; i++) {
    const param = params[i].split('=');
    if (param[0] === sParam) {
      return param[1] === undefined ? true : param[1];
    }
  }
  return null;
};