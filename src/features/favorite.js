const twit = require("twit")
const config = require("../config")
const bot = new twit(config.key)
const random = require("./random")

const favorite = () => {
  let params = {
    q: "#EndSARS OR #EndSarsNow",
    lang: "en",
    result_type: "recent",
    count: 500,
  }

  // Search for particular tweets
  bot.get("search/tweets", params, (err, data) => {
    let tweets = data.statuses

    // Pick a random tweet
    let tweet = random(tweets)
    // console.log(tweet.id_str)

    if (err) {
      // console.error(`Error: ${error}`)
    } else {
      bot.post(
        "favorites/create",
        {
          id: tweet.id_str,
        },

        (err, data) => {
          if (err) {
            // console.log(err)
          } else {
            console.log(`I just liked => ${data.text}`)
          }
        }
      )
    }
  })
}

module.exports = favorite

// Search for particular tweets =>
// Pick at random
// Favorite/like tweets
