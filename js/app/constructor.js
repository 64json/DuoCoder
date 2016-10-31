const {extend} = $;

const panelVars = {
  language: null,
  editor: null,
  matchings: null,
  code: ''
};

module.exports = function () {
  this.panel = [
    extend(true, {}, panelVars),
    extend(true, {}, panelVars)
  ];
  this.exam_mode = false;

  this.setLanguage = (index, language) => {
    this.panel[index].language = language;
  };

  this.setEditor = (index, editor) => {
    this.panel[index].editor = editor;
  };

  this.setMatchings = (index, matchings) => {
    this.panel[index].matchings = matchings;
  };

  this.setCode = (index, code) => {
    this.panel[index].code = code;
  };

  this.enterExamMode = () => {
    this.exam_mode = true;
  };

  this.exitExamMode = () => {
    this.exam_mode = false;
  };

  this.getLanguage = (index => {
    return this.panel[index].language;
  });

  this.getEditor = (index) => {
    return this.panel[index].editor;
  };

  this.getMatchings = (index) => {
    return this.panel[index].matchings;
  };

  this.getCode = (index, readable) => {
    const code = this.panel[index].code;
    if (readable) return code.replace(/#(\d+)\{\[(((?!\]\}).)*)\]\}/g, '$2');
    else return code;
  };

  this.isExamMode = () => {
    return this.exam_mode;
  };
};