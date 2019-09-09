const twit = require("twit");
const config = require("../config");
const bot = new twit(config.key);
const random = require("./random");

const followback = () => {
  bot.get(
    "followers/list",
    {
      screen_name: "Vectorbottress"
    },
    (err, data) => {
      if (err) {
        console.log(err.message);
      } else {
        const follow = data.users.map(user => user.screen_name);
        let user = random(follow);

        //      const follow = data.users.map(user => user.screen_name);
        // Pick a random tweet
        // let user = random(follow);

        bot.post(
          "friendships/create",
          {
            screen_name: user
          },
          (err, data) => {
            if (err) {
              console.log(err.message);
            } else {
              console.log(data.following);
            }
          }
        );
      }
    }
  );
};

module.exports = followback;

// Get list of ids/screen_name of follower's list
// Check for account not having 'following' connection
// Follow back!
