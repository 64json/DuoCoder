module.exports = {
  set: (name, value) => {
    Cookies.set(name, value);
  },
  get: name => {
    Cookies.get(name);
  },
  remove: name => {
    Cookies.remove(name);
  }
};