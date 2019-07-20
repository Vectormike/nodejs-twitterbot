const twit = require("twit");
const config = require("./config");
const bot = new twit(config.key);
//Api
const favorite = require("./features/favorite");
setInterval(favorite, 100000);

const retweet = require("./features/retweet");
setInterval(retweet, 100000);

const post = require("./features/posts");
setInterval(post, 1000 * 60 * 60 * 24);

// const autodm = require("./features/autodm");
// autodm();

// const followed = require('./features/follow');

// const stream = bot.stream('user');
// stream.on('follow', followed)
