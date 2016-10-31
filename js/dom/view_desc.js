module.exports = (desc) => {
  const converter = new showdown.Converter();

  const $desc = $('#description');
  $desc.html(converter.makeHtml(desc));
};