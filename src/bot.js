
//Api
const favorite = require("./features/favorite");
setInterval(favorite, 100000)

const retweet = require('./features/retweet');
setInterval(retweet, 90000)

const post = require('./features/posts');
// post();
setInterval(post, 1000 * 60 * 60 * 24);