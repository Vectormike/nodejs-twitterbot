const twit = require('twit');
const config = require('../config');
const bot = new twit(config.key);
const stream = bot.stream('user');

// follow user immediately when ffollowed
const followed = (event) => {
    
}    

// Tweet to a user
const tweetNow = () => {

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