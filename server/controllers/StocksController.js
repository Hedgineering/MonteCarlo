const path = require("path");

const getTickerPage = async (req, res) => {
  if (req.accepts("html")) {
    res.status(200);
    res.sendFile(path.join(__dirname, "..", "views", "tickerPicker.html"));
  } else {
    res
      .status(404)
      .json({
        result: "Please go to the url /api/stock/<DESIRED TICKER NAME>",
        message: "Ticker Selection page not found",
      });
  }
};

/**
 * REST endpoint for getting historical data for a given ticker
 * @param {HttpRequest} req request object
 * @param {HttpResponse} res response object
 */
const getHistoricalData = async (req, res) => {
  try {
    // console.log(req.params);
    res.status(200).json({ result: true, message: "Success" });
  } catch (e) {
    console.log(e.message);
    res.status(404).json({ result: false, message: "Something Went Wrong" });
  }
};

module.exports = {
  getTickerPage,
  getHistoricalData,
};
