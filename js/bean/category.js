module.exports = class {
  constructor(name, dir, children = []) {
    this.parent = null;
    this.name = name;
    this.dir = dir;
    this.children = children;
    children.forEach(child => {
      child.parent = this;
    });
  }

  sub(index) {
    return this.children[index];
  }
};