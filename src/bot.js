import Twit from 'twit';
import config from './config';

const bot = new Twit(config);


// Post a tweet
bot.post('statuses/update', 
    {
        status: 'bot working 👎',
        in_reply_to_status_id:
    }, 
    (err, data, response) => {
    
    if (err) {
        console.log(err);
    } else { 
        console.log(`Tweet =>: ${data.text} `)
    }
    console.log(data);
})
