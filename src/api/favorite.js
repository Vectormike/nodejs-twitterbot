const twit = require("twit");
const config = require("../config");
const bot = new twit(config.key);

const favorite =  () => {

	let params = {
		q: '#reactjs',
		result_type: 'recent',
		lang: 'en'
	}


	// Search for particular tweets
    bot.get('search/tweets', params, (err, data) => {
		console.log(data.text)
		let tweets = data.statuses;

		if (err) {
			console.error(`Error: ${error}`)
		} else {
		
			 

			bot.post('favorites/create', 
			{
				id: tweets.id_str
			},
		
			(err, data) => {
				if (err) {
					console.log(err);
				} else {
					console.log(`I just liked => ${data.text}`)
				}
			}    
    )
		}
	})

    

}

module.exports = favorite;

// Search for particular tweets =>
//
// Favorite/like tweets 

