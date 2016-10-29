const RSVP = require('rsvp');
const DOM = require('./dom');
const Server = require('./server');

const {
  extend
} = $;

$(() => {
  Server.loadSource('variables', 'definition', 'cpp').then((source) => {
    DOM.viewCode(0, source, 'cpp');
  });

  Server.loadSource('variables', 'definition', 'py').then((source) => {
    DOM.viewCode(1, source, 'py');
  })
});

extend(true, window, {
  DOM
});