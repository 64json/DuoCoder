module.exports = (desc) => {
  const $desc = $('#description');
  $desc.html(markdown.toHTML(desc));
};