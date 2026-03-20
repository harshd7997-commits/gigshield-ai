function createPolicy(user) {
    let risk = 1; // static placeholder
    let premium = 30 + risk * 10;

    return {
        user: user,
        weekly_premium: premium,
        payout: 300
    };
}

module.exports = createPolicy;