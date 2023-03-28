/* 
 * @params ticker is the shorthand letter code for a stock (e.g. AAPL for Apple Inc.) 
 * @params dataType is the kind of data you would like to request from Marketstack's API: eod for end-of-day info; intraday for intraday info; dividends for dividends info
 */
function getMarketData(ticker,dataType) {
    var host = 'http://api.marketstack.com/v1/';
    var apiKey = 'cd8eb947528ad20baa21b89e44a161c7';    
    const link = JSON.stringify(host + dataType +  '?' + 'access_key=' + apiKey + '&' + 'symbols=' + ticker );

    let url = new URL(host + dataType +  '?' + 'access_key=' + apiKey + '&' + 'symbols=' + ticker );


    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(users => {
            console.log(users);
        });
    }
module.exports = {
    getMarketData
}