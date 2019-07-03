"use strict";

var _config = _interopRequireDefault(require("./config"));

var _twit = _interopRequireDefault(require("twit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var bot = new _twit["default"](_config["default"].key); // import tweet from './api/tweet';
// Like a tweet

var params = {
  q: '#reactjs',
  result_type: 'recent',
  lang: 'en',
  count: 1
};
bot.get('search/tweets', params, function (err, data) {
  var tweet = data;

  if (err) {
    console.log(err);
  } else {
    console.log(data.statuses);
  }
}); // bot.post('favorites/create', 
//     {
//         id: '974'
//     },
//     (err, data, response) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(`I just liked => ${data.text}`)
//         }
//     }    
// )