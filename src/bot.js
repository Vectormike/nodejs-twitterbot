const twit = require("twit");
const config = require("./config");
const bot = new twit(config.key);


//Api
const favorite = require("./api/favorite");
setInterval(favorite, 1000)





// Like a tweet

// let params = {
//     q: '#reactjs',
//     result_type: 'recent',
//     lang: 'en',
//     count: 1
// };

// bot.get('search/tweets', params, 
//     (err, data) => {
//         let tweet = data
//         if (err) {
//             console.log(err)
//         } else {
//             console.log(data.statuses)
//         }
//     }
// )
