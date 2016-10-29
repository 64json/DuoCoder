const Server = require('../server');
const viewCode = require('./view_code');
const viewDesc = require('./view_desc');

const languages = Server.getLanguages();

const loadCategory = (index, category, language) => {
  Server.loadCode(category, language).then((code) => {
    viewCode(index, language, code);
  });
  Server.loadDesc(category, language).then((desc) => {
    viewDesc(index, desc)
  })
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
    const $li = $(this);
    const $ul = $(this).parent();
    loadCategory(0, categories[$ul.data('category')].sub($li.data('subcategory')), languages[0]);
    loadCategory(1, categories[$ul.data('category')].sub($li.data('subcategory')), languages[1]);
  });

  $('#index > li:eq(0)').click();
  $('ul.sub > li:eq(0)').click();
};