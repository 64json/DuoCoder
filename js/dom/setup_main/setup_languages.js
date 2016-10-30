const Server = require('../../server');

const languages = Server.getLanguages();

module.exports = () => {
  for (const container of ['#lang-from', '#lang-to']) {
    const $container = $(container);
    for (const language of languages) {
      const $lang = $(`<a class="lang" href="${container == '#lang-from' ? '#dots' : './learn.html'}"></a>`);
      $container.append($lang);
      const $logo = $(`<div class="logo" style="background-image: url('./images/lang_${language.ext}.png')"></div>`);
      $lang.append($logo);
      $logo.append(`<div class="logo mono" style="background-image: url('./images/lang_${language.ext}_mono.png')"></div>`);
      $lang.append(`<div class="name">${language.name}</div>`);
    }
  }
};