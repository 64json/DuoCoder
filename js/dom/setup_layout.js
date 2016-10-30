const app = require('../app');
const exam = require('./exam');

module.exports = () => {
  $('#next').click(function () {
    if ($(this).hasClass('next')) {
      const $active = $('.sub > li.active');
      if ($active.is(':last-child')) {
        const $active_parent = $('#index > li.active');
        if ($active_parent.is(':nth-last-child(2)')) {
          alert('Congrats!');
        } else {
          $active_parent.next().next().click();
          $('#index > li.active + .sub > li:first-child').click();
        }
      } else {
        $active.next().click();
      }
    } else {
      if (app.isExamMode()) {
        exam.exit();
      } else {
        exam.enter();
      }
    }
  });
};