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
  this.comparison_enabled = true;

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

  this.enableComparison = () => {
    this.comparison_enabled = true;
  };

  this.disableComparison = () => {
    this.comparison_enabled = false;
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

  this.getCode = (index) => {
    return this.panel[index].code;
  };

  this.isComparisonEnabled = () => {
    return this.comparison_enabled;
  };
};