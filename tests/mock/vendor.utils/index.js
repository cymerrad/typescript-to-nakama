module.exports = {
  deepcopy: function (source) {
    return JSON.parse(JSON.stringify(source));
  },

  inspect: function (table) {
    return JSON.stringify(table);
  },

  sort: function (table, fn) {
    table.sort(function (a, b) { return fn(a, b) ? -1 : 1 }); // WOW, this required some focus
  }
}