const RSVP = require('rsvp');
const Server = require('../server');
const Storage = require('../storage');
const app = require('../app');
const viewCode = require('./view_code');
const viewDesc = require('./view_desc');
const exam = require('./exam');

const from = 0, to = 1;

const loadCategory = (index, category, language) => {
  return new RSVP.Promise(resolve => {
    Server.loadCode(category, language).then((code) => {
      exam.exit();
      app.setCode(index, code);
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
    category.element = $(`<li>${i + 1}| ${category.name}</li>`);
    $index.append(category.element);
    const $sub_index = $(`<ul class="sub" data-category="${i}"></ul>`);
    $index.append($sub_index);
    category.children.forEach((category, j) => {
      category.element = $(`<li data-subcategory="${j}">${category.name}</li>`);
      $sub_index.append(category.element);
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
    const category = categories[$ul.data('category')].sub($li.data('subcategory'));
    Storage.category.set(category);
    loadCategory(from, category, app.getLanguage(from));
    loadCategory(to, category, app.getLanguage(to));
  });

  let category = Storage.category.get();
  do {
    category.element.click();
    category = category.parent;
  } while (category);
};