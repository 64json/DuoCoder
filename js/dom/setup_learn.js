module.exports = () => {
  $('.code').mousemove(function (e) {
    $('.match').removeClass('selected');
    const $code = $(this);
    const {pageX, pageY} = e;
    $code.find('.match').each(function () {
      const $match = $(this);
      const {top, left} = $match.offset();
      const bottom = top + $match.height();
      const right = left + $match.width();
      if (top < pageY && pageY < bottom && left < pageX && pageX < right) {
        const match = $match.data('match');
        $('.match').filter(function () {
          return $(this).data('match') == match;
        }).addClass('selected');
      }
    });
  });
};