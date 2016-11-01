module.exports = class {
  constructor(name, ace, ext, complete = true) {
    this.name = name;
    this.ace = ace;
    this.ext = ext;
    this.complete = complete;
  }

  static getWithExt(ext) {
    const Server = require('../server');
    const languages = Server.getLanguages();
    for (const language of languages) {
      if (language.ext == ext) return language;
    }
  }
};