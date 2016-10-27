$(document).ready(() => {
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

  $('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });

  const $unfocused = $('.focused');
  const $lang_to = $('#lang-to');
  const onScroll = () => {
    $unfocused.toggleClass('unfocused', $(document).scrollTop() <= 168);
  };
  onScroll();
  $(window).scroll(onScroll);
});