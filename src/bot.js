const twit = require("twit")
const config = require("./config")
const bot = new twit(config.key)
//Api
const favorite = require("./features/favorite")
setInterval(favorite, 100000)

const retweet = require("./features/retweet")
setInterval(retweet, 50000)

const posts = require("./features/posts")
setInterval(posts, 1000000)

const followback = require("./features/followback")
setInterval(followback, 1000000)
// const autodm = require("./features/autodm");
// autodm();

// const followed = require('./features/follow');

// const stream = bot.stream('user');
// stream.on('follow', followed)
