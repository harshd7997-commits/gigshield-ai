function checkRain(rainValue) {
    if (rainValue > 80) {
        return true; // trigger
    }
    return false;
}

module.exports = checkRain;