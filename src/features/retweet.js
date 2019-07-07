const twit = require('twit');
const config = require('../config');
const bot = new twit(config.key);
const random = require('./random.js');


// Search specific tweets
bot.get('search/tweets', {
        q: '@vectormike_',
        count: 5
    }, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(data.statuses);
        }
    }

)

// Search specific tweets
// Pick at random
// Retweet!