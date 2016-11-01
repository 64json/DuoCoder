const Server = require('../../server');

const languages = Server.getLanguages();

module.exports = () => {
  for (const container of ['#lang-from', '#lang-to']) {
    const $container = $(container);
    for (const language of languages) {
      const $lang = $(`<a class="lang" href="${container == '#lang-from' ? '#dots' : '#top'}"></a>`);
      $container.append($lang);
      const $logo = $(`<div class="logo" style="background-image: url('./images/lang_${language.ext}.png')"></div>`);
      $lang.append($logo);
      $logo.append(`<div class="logo mono" style="background-image: url('./images/lang_${language.ext}_mono.png')"></div>`);
      $lang.append(`<div class="name">${language.name}</div>`);
    }
    $container.find('.lang').click(function () {
      const language = languages[$(this).index()];
      if (!language.complete) {
        alert(`DuoCoder is under development for ${language.name}.`);
        return;
      }
      $container.find('.lang.selected').removeClass('selected');
      $(this).addClass('selected');
    });
  }
  $('.lang').click(() => {
    const $form = $('form');
    const $lang_from_selected = $('#lang-from .lang.selected');
    const $lang_to_selected = $('#lang-to .lang.selected');
    if ($lang_from_selected.length && $lang_to_selected.length) {
      const from_index = $lang_from_selected.index();
      const to_index = $lang_to_selected.index();
      $form.find('[name="lang_from"]').val(languages[from_index].ext);
      $form.find('[name="lang_to"]').val(languages[to_index].ext);
      $form.submit();
    }
  });
};