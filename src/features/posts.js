const twit = require("twit");
const config = require("../config");
const bot = new twit(config.key);
const random = require("./random");
const status = require("./status");

const posts = () => {
  // Select posts at random
  let tweet = random(status);

  // Fn to delete status if immediately it's tweeted

  // Post status from a an array
  bot.post("statuses/update", { status: tweet }, (err, data) => {
    if (err) {
      // console.log(err);
    } else {
      console.log(`I tweeted => ${data.text}`);
    }
  });
};

module.exports = posts;
