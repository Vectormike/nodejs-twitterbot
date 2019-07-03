"use strict";

var _twit = _interopRequireDefault(require("twit"));

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var bot = new _twit["default"](_config["default"]);