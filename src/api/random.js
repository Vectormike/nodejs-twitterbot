const random = (tweets) => {
    let tweet = Math.floor(Math.random() * tweets.length);
    return tweets[tweet];
}

module.exports = random;