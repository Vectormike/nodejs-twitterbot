const twit = require('twit');
const config = require('../config');
const bot = new twit(config.key);

// Post status from a an array
bot.post('statuses/update', 
    {status: 'Hi'}, 
        (err, data) => {
        if(err) {
            console.log(err)
        } else {
            console.log(`I tweeted => ${data.text}`)
        }
    }
)