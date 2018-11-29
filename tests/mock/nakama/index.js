const uuid = require("uuid");

module.exports = {
  uuid_v4: function () {
    return uuid.v4();
  },

  logger_error: function (message) {
    console.log("ERROR", message);
  },

  logger_info: function (message) {
    console.log("INFO", message);
  },

  json_encode: function (obj) {
    return JSON.stringify(obj);
  }
}