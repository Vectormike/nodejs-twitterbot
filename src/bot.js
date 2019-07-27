const twit = require("twit");
const config = require("./config");
const bot = new twit(config.key);
//Api
const favorite = require("./features/favorite");
setInterval(favorite, 100000);

const retweet = require("./features/retweet");
setInterval(retweet, 100000);

const posts = require("./features/posts");
setInterval(posts, 432000000);

const followback = require("./features/followback");
// followback();
// const autodm = require("./features/autodm");
// autodm();

// const followed = require('./features/follow');

// const stream = bot.stream('user');
// stream.on('follow', followed)
