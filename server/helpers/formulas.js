/**
 * Returns list of periodic daily returns given list of daily prices.
 * 
 * @param {Array} dailyPrices Array of closing price on daily time frame.
 * @returns {Array} Periodic Daily Returns from index 1 to n.
 */
function periodicDailyReturns(dailyPrices) {
    const result = [];
    for (let i = 1; i < dailyPrices.length; i++) {
        result.push(Math.log(dailyPrices[i] / dailyPrices[i - 1]));
    }
    return result;
}

/**
 * Average of list values.
 * 
 * @param {Array} arr Any list of numerical values.
 * @returns {number} Average of list values.
 */
function average(arr) {
    let sum = 0;
    for (n in arr) {
        sum += n;
    }
    return sum / arr.length;
}

/**
 * Population Variance of list values.
 * 
 * @param {Array} arr Any list of numerical values.
 * @returns {number} Variance of list values.
 */
function popVariance(arr) {
    const avg = average(arr);
    let sum = 0;
    for (n in arr) {
        sum += (arr[i] - avg) ** 2;
    }
    return sum / arr.length;
}

/**
 * Population Standard Deviation of list values.
 * 
 * @param {Array} arr Any list of numerical values.
 * @returns {number} Standard deviation of list values.
 */
function popStdDev(arr) {
    return popVariance(arr) ** 0.5;
}

/**
 * Gets drift value from array historical price data.
 * 
 * @param {Array} dailyPrices Array of closing price on daily time frame.
 * @returns {number} Returns drift value.
 */
function drift(dailyPrices) {
    const periodicReturns = periodicDailyReturns(dailyPrices);
    const avg = average(periodicReturns);

    const varp = popVariance(periodicReturns);
    return avg - varp / 2;
}

/**
 * Returns normally-distributed random value.
 * 
 * @param {Array} dailyPrices Array of closing price on daily time frame.
 * @returns {number} Random value based on standard deviation of dailyPrices.
 */
function rand(dailyPrices) {
    const stddev = popStdDev(periodicDailyReturns(dailyPrices));
    return stddev * normSInv(Math.random());
}

/**
 *  https://stackoverflow.com/questions/8816729/javascript-equivalent-for-inverse-normal-function-eg-excels-normSInv-or-nor.
 * 
 * @param {*} p Value in [0, 1].
 * @returns {number} z-value from given p.
 */
function normSInv(p) {
    let a1 = -39.6968302866538, a2 = 220.946098424521, a3 = -275.928510446969;
    let a4 = 138.357751867269, a5 = -30.6647980661472, a6 = 2.50662827745924;
    let b1 = -54.4760987982241, b2 = 161.585836858041, b3 = -155.698979859887;
    let b4 = 66.8013118877197, b5 = -13.2806815528857, c1 = -7.78489400243029E-03;
    let c2 = -0.322396458041136, c3 = -2.40075827716184, c4 = -2.54973253934373;
    let c5 = 4.37466414146497, c6 = 2.93816398269878, d1 = 7.78469570904146E-03;
    let d2 = 0.32246712907004, d3 = 2.445134137143, d4 = 3.75440866190742;
    let p_low = 0.02425, p_high = 1 - p_low;
    let q, r;
    let retVal;

    if ((p < 0) || (p > 1)) {
        alert("NormSInv: Argument out of range.");
        retVal = 0;
    }
    else if (p < p_low) {
        q = Math.sqrt(-2 * Math.log(p));
        retVal = (((((c1 * q + c2) * q + c3) * q + c4) * q + c5) * q + c6) / ((((d1 * q + d2) * q + d3) * q + d4) * q + 1);
    }
    else if (p <= p_high) {
        q = p - 0.5;
        r = q * q;
        retVal = (((((a1 * r + a2) * r + a3) * r + a4) * r + a5) * r + a6) * q / (((((b1 * r + b2) * r + b3) * r + b4) * r + b5) * r + 1);
    }
    else {
        q = Math.sqrt(-2 * Math.log(1 - p));
        retVal = -(((((c1 * q + c2) * q + c3) * q + c4) * q + c5) * q + c6) / ((((d1 * q + d2) * q + d3) * q + d4) * q + 1);
    }

    return retVal;
}

/**
 * Generate next day's price given previous daily prices.
 * 
 * @param {Array} dailyPrices Array of closing price on daily time frame.
 * @returns {number} Simulated value of next day's price.
 */
function nextPrice(dailyPrices) {
    const todayPrice = dailyPrices[dailyPrices.length - 1];
    const driftValue = drift;
    const randomValue = rand(dailyPrices);

    return todayPrice * Math.exp(driftValue + randomValue);
}

module.exports = {
    periodicDailyReturns,
    average,
    popVariance,
    popStdDev,
    drift,
    rand,
    normSInv,
    nextPrice
}