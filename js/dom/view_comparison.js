const app = require('../app');

const from = 0, to = 1;

module.exports = () => {
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
    comparisons.push([[], [], -1]);
  }
  for (const i of [from, to]) {
    $(`.panel:eq(${i}) .code .match`).each(function () {
      const $match = $(this);
      const match = $match.data('match');
      comparisons[match][i].push($match);
      if (i == 0 && comparisons[match][2] == -1) {
        comparisons[match][2] = $match.parent().index();
      }
    });
  }
  for (let i = 0; i <= max; i++) {
    if (comparisons[i][2] == -1) {
      const matchings = pair[0];
      matchings.every(matching => {
        if (matching[1] == i) {
          comparisons[i][2] = matching[2];
          return false;
        }
        return true;
      });
    }
  }
  $desc.empty();
  let last_line = -1;
  for (const comparison of comparisons) {
    const [pieces_from, pieces_to] = comparison;
    const is_same = pieces_from.length == pieces_to.length && pieces_from.every((element, index) => {
        return element.text() == pieces_to[index].text();
      });
    if (is_same) continue;
    const line = comparison[2];
    if (last_line != line) {
      last_line = line;
      $desc.append(`<div class="line line-number">Line ${line + 1}</div>`);
    }
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