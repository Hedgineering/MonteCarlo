const path = require("path");
const { 
    nextPrice
} = require("../helpers/formulas.js");

//inputs: how many days to predict, historical data
const postSimulations = async (req, res) => {
  if (req.body.historicalData!=null) {
    let prediction;
    if(req.body.daysToPredict==null){ //predict one day only
        prediction=nextPrice(req.body.historicalData);
        res.status(200).json({result: prediction, message: "prediction posted"}); 
    }

    //put historical data into an array
    //use historical data to predict future cost
    //create super list that will continue to predict using previously predicted data until time desired.
    let historicalData=req.body.historicalData;
    let predictedPrices=[];
    let numDaysPredict=req.body.daysToPredict;
    for(let i=0;i<numDaysPredict;i++){
        prediction=nextPrice(historicalData);
        predictedPrices.push(prediction);
        historicalData.push(prediction);
    }
    res.status(200).json({result: predictedPrices, message: "predictions posted"});
  } else {
    res
      .status(404)
      .json({
        message: "No valid inputs were provided",
      });
  }
};

module.exports = {
    postSimulations,
};