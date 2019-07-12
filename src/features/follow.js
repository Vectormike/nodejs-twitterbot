const twit = require('twit');
const config = require('../config');
const bot = new twit(config.key);
const stream = bot.stream('user');

const follow = () => {

    // follow user immediately when followed
    const followed = (event) => {

        // get twitter handle
        let name = event.source.name,
        screenName = event.source.screen_name;

        // reply to user that followed now
        replyNow(`@${screenName}, thanks for following`)
    }    

    // Reply to followed user
    const replyNow = (tweetTxt) => {

        // tweet in callback
        let tweet = {
            status: tweetTxt
        }

        // tweet
        bot.post('status/update', tweet,     
            (err, data) => {
                if(err) {
                    console.log(`Error => ${err}`)
                } else {
                    console.log(`Tweet is => ${data.text}`)
                }
        })
    }

    stream.on('follow', followed)
}    

module.exports = follow;