const twit = require("twit");
const config = require("./config");
const bot = new twit(config.key);
//Api
const favorite = require("./features/favorite");
setInterval(favorite, 100000);

const retweet = require("./features/retweet");
setInterval(retweet, 1000000);

const posts = require("./features/posts");
setInterval(posts, 10000000);

const followback = require("./features/followback");
setInterval(followback, 100000);
// const autodm = require("./features/autodm");
// autodm();

// const followed = require('./features/follow');

// const stream = bot.stream('user');
// stream.on('follow', followed)
