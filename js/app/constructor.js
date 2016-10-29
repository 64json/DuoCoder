const {extend} = $;

const panelVars = {
  editor: null,
  matchings: null
};

module.exports = function () {
  this.panel = [
    extend(true, {}, panelVars),
    extend(true, {}, panelVars)
  ];

  this.setEditor = (index, editor)=> {
    this.panel[index].editor = editor;
  };

  this.setMatchings = (index, matchings) => {
    this.panel[index].matchings = matchings;
  };

  this.getEditor = (index)=> {
    return this.panel[index].editor;
  };

  this.getMatchings = (index)=> {
    return this.panel[index].matchings;
  }
};