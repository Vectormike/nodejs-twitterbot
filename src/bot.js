
//Api
const favorite = require("./features/favorite");
setInterval(favorite, 100000)

const retweet = require('./features/retweet');
setInterval(retweet, 1000000)

const post = require('./features/posts');
setInterval(post, 1000 * 60 * 60 * 24);

const follow = require('./features/follow')
follow()