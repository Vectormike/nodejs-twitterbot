"use strict";

var _twit = _interopRequireDefault(require("twit"));

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var bot = new _twit["default"](_config["default"]); // import tweet from './api/tweet';
// Like a tweet

bot.post('favorites/create', {
  id: '499'
}, function (err, data, response) {
  if (err) {
    console.log(err);
  } else {
    console.log("I just liked => ".concat(data.text));
  }
});