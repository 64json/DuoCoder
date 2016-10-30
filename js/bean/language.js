module.exports = class {
  constructor(name, ace, ext) {
    this.name = name;
    this.ace = ace;
    this.ext = ext;
  }

  static getWithExt(ext) {
    const Server = require('../server');
    const languages = Server.getLanguages();
    for (const language of languages) {
      if (language.ext == ext) return language;
    }
  }
};