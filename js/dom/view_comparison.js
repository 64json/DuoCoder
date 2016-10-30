const app = require('../app');

const from = 0, to = 1;

module.exports = () => {
  if (!app.isComparisonEnabled()) return;

  const $desc = $('#comparison');
  const pair = [
    app.getMatchings(from),
    app.getMatchings(to)
  ];

  let max = -1;
  for (const matchings of pair) {
    for (const matching of matchings) {
      max = Math.max(max, matching[1]);
    }
  }

  const comparisons = [];
  for (let i = 0; i <= max; i++) {
    comparisons.push([[], []]);
  }
  for (const i of [from, to]) {
    $(`.panel:eq(${i}) .code .match`).each(function () {
      const $match = $(this);
      const match = $match.data('match');
      comparisons[match][i].push($match);
    });
  }

  $desc.empty();
  for (const comparison of comparisons) {
    const [pieces_from, pieces_to] = comparison;
    const is_same = pieces_from.length == pieces_to.length && pieces_from.every(function (element, index) {
        return element.text() == pieces_to[index].text();
      });
    if (is_same) continue;
    const $line = $('<div class="line"></div>');
    $desc.append($line);
    for (const pieces of [pieces_from, pieces_to]) {
      const $group = $('<span class="group"></span>');
      $line.append($group);
      if (!pieces.length) {
        $group.append(`<span class="empty"></span>`);
      }
      for (const piece of pieces) {
        const $piece = piece.clone();
        $piece.data('match', piece.data('match'));
        $group.append($piece);
      }
    }
  }
};