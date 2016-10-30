module.exports = {
  set: (name, value) => {
    if (Cookies.get(name) == value) return false;
    Cookies.set(name, value);
    return true;
  },
  get: name => {
    return Cookies.get(name);
  },
  remove: name => {
    Cookies.remove(name);
    return true;
  }
};