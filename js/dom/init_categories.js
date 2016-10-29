module.exports = categories => {
  const $index = $('#index');
  categories.forEach((category, i) => {
    $index.append(`<li>${i+1}| ${category.name}</li>`);
    const $sub_index = $('<ul class="sub"></ul>');
    $index.append($sub_index);
    category.children.forEach(category => {
      $sub_index.append(`<li>${category.name}</li>`);
    });
  });
};