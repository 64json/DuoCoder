const RSVP = require('rsvp');
const {
  ajax,
  extend
} = $;

const defaults = {};

module.exports = function (url, options = {}) {
  return new RSVP.Promise((resolve, reject) => {
    const callbacks = {
      success(response) {
        resolve(response);
      },
      error(reason) {
        reject(reason);
      }
    };
    const opts = extend({}, defaults, options, callbacks, {url});
    ajax(opts);
  });
};