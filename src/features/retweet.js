const twit = require('twit');
const config = require('../config');
const bot = new twit(config.key);
const random = require('./random.js');

const retweet = () => {

    let params = {
		q: '#Reactjs, #javaScript, #Nodejs, #express, #mongodb',
		result_type: 'recent'
	}

    // Search specific tweets
    bot.get('search/tweets', params,
        (err, data) => {

            let tweets = data.statuses;
            
            // Pick a random tweet
    		let tweet = random(tweets);
	    	console.log(tweet.id_str);

            if (err) {
                console.log(err);
            } else {
            
            // Retweet
            bot.post('statuses/retweet/:id', {
                    id: tweet.id_str
                }, (err, data) => {
                    if (err) {
                        console.log(err)
                    } else {
                        console.log(`I just retweeted => ${data.text}`)
                    }
                }
            )}
        }
    )
   
}

module.exports = retweet;

// Search specific tweets
// Pick at random
// Retweet!