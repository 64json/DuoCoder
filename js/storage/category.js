const {set, get} = require('./manager');
const Server = require('../server');

const getName = () => {
  return 'category';
};

module.exports = {
  set: (category) => {
    let path = '';
    do {
      path = category.dir + '/' + path;
      category = category.parent;
    } while (category);
    path.substr(0, path.length - 1);
    return set(getName(), path);
  },
  get: () => {
    let categories = Server.getCategories();
    const dirs = get(getName()).split('/');
    for (const dir of dirs) {
      const category = $.grep(categories, function (category) {
        return category.dir == dir;
      })[0];
      categories = category.children;
      if (!categories.length) return category;
    }
    return null;
  }
};