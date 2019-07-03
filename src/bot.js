import config from './config';
import Twit from 'twit';
const bot = new Twit(config.key);

// import tweet from './api/tweet';



// Like a tweet

let params = {
    q: '#reactjs',
    result_type: 'recent',
    lang: 'en',
    count: 1
};

bot.get('search/tweets', params, 
    (err, data) => {
        let tweet = data
        if (err) {
            console.log(err)
        } else {
            console.log(data.statuses)
        }
    }
)

// bot.post('favorites/create', 
//     {
//         id: '974'
//     },
//     (err, data, response) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(`I just liked => ${data.text}`)
//         }
//     }    
// )