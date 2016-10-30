const setupLanguages = require('./setup_languages');
const setupStickToBottom = require('./setup_stick_to_bottom');
const setupSmoothScroll = require('./setup_smooth_scroll');

module.exports = () => {
  setupLanguages();
  setupStickToBottom();
  setupSmoothScroll();
};