const {
  Category
} = require('../bean');

module.exports = () => {
  return [
    new Category('Variables', 'var', [
      new Category('Definition', 'def'),
      new Category('Boolean Type', 'bool'),
      new Category('Numeric Types', 'num'),
      new Category('Strings', 'str'),
      new Category('Data Structures', 'data_structure'),
      new Category('Constants', 'const')
    ]),
    new Category('Operators', 'operator', [
      new Category('Boolean Operations', 'bool'),
      new Category('Comparisons', 'compare'),
      new Category('Bitwise Operations', 'bitwise')
    ]),
    new Category('Conditionals', 'conditional', [
      new Category('If / Else Statement', 'if_else'),
      new Category('Switch / Case Statement', 'switch_case'),
      new Category('Ternary Operator', 'ternary')
    ]),
    new Category('Loops', 'loop', [
      new Category('For Statement', 'for'),
      new Category('While Statement', 'while'),
      new Category('Continue Statement', 'continue'),
      new Category('Break Statement', 'break')
    ]),
    new Category('Functions', 'func', [
      new Category('Definition', 'def'),
      new Category('Parameters', 'param'),
      new Category('Return Statement', 'return')
    ]),
    new Category('Classes', 'class', [
      new Category('Definition', 'def'),
      new Category('Class Variables', 'cls_var'),
      new Category('Class Functions', 'cls_func'),
      new Category('Instances', 'obj'),
      new Category('Instance Variables', 'obj_var'),
      new Category('Instance Functions', 'obj_func'),
      new Category('Inheritance', 'inherit')
    ]),
    new Category('Built-In', 'built_in', [
      new Category('Math Functions', 'math'),
      new Category('String Functions', 'str'),
      new Category('Data Structure Operations', 'data_structure'),
      new Category('Others', 'etc')
    ])
  ];
};