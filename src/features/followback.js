const twit = require("twit");
const config = require("../config");
const bot = new twit(config.key);

const followback = () => {
  bot.get(
    "followers/ids",
    {
      screen_name: "Vectorbottress"
    },
    (err, data) => {
      const followers = data.ids;
      if (err) {
        console.log(`Error is ${err}`);
      } else {
        console.log(followers);
      }
    },
    bot.get('friendship/create', {})
  );
};

module.exports = followback;

// Get list of ids/screen_name of follower's list
// Check for account not having 'following' connection
// Follow back!
