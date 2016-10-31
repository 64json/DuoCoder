module.exports = {
  zip: (code) => {
    return code.trim().replace(/^\s*[\r\n]/gm, '').replace(/\b\s+\B/g, '').replace(/\B\s+\b/g, '').replace(/\B\s+\B/g, '');
  }
};