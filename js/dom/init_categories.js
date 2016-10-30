const RSVP = require('rsvp');
const Server = require('../server');
const viewCode = require('./view_code');
const viewDesc = require('./view_desc');

const languages = Server.getLanguages();
const from = 0, to = 1;

const loadCategory = (index, category, language) => {
  return new RSVP.Promise(resolve => {
    Server.loadCode(category, language).then((code) => {
      viewCode(index, language, code);
      resolve();
    });
    if (index == to) {
      Server.loadDesc(category, language).then(viewDesc);
    }
  });
};

module.exports = categories => {
  const $index = $('#index');
  categories.forEach((category, i) => {
    $index.append(`<li>${i + 1}| ${category.name}</li>`);
    const $sub_index = $(`<ul class="sub" data-category="${i}"></ul>`);
    $index.append($sub_index);
    category.children.forEach((category, j) => {
      $sub_index.append(`<li data-subcategory="${j}">${category.name}</li>`);
    });
  });

  $('#index > li').click(function () {
    $('#index > li.active').removeClass('active');
    $(this).addClass('active');
  });

  $('ul.sub > li').click(function () {
    $('ul.sub > li.active').removeClass('active');
    $(this).addClass('active');
    const $li = $(this);
    const $ul = $(this).parent();
    loadCategory(from, categories[$ul.data('category')].sub($li.data('subcategory')), languages[0]);
    loadCategory(to, categories[$ul.data('category')].sub($li.data('subcategory')), languages[1]);
  });

  $('#index > li:eq(0)').click();
  $('ul.sub > li:eq(0)').click();
};