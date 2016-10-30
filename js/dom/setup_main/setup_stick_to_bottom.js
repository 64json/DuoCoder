module.exports = () => {
  const $stick_to_bottom_fake = $('.stick-to-bottom.fake');
  const $stick_to_bottom_real = $('.stick-to-bottom.real');
  const $lang_from = $('#lang-from');
  const $fullscreen = $('.fullscreen');
  const onResize = () => {
    const top = $lang_from.offset().top + $lang_from.height();
    const bottom = $stick_to_bottom_fake.offset().top;
    $fullscreen.toggleClass('full', top < bottom);
    $stick_to_bottom_real.toggleClass('stick', top < bottom)
  };
  onResize();
  $(window).resize(onResize);
};