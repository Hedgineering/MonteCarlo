const path = require("path");
const { 
    nextPrice
} = require("../helpers/formulas.js");

//inputs: how many days to predict, historical data
const postSimulations = async (req, res) => {
  let startEquity=req.body.startEquity;
  const winProbability=req.body.winProbability;
  const winLossRelation=req.body.winLossRelation;
  const riskPercent=req.body.riskPercent;
  const numberTrades=req.body.numberTrades;
  const numberSimulations=req.body.numberSimulations;
  let notNull=startEquity!=null&&winProbability!=null&&winLossRelation!=null&&numberTrades!=null&&numberSimulations!=null&&riskPercent!=null;
  let simulationResults=Array(numberSimulations).fill().map(() => Array(numberTrades).fill(startEquity));
  if (notNull) {
    for(let i=0;i<numberSimulations;i++){
      let simulationEquity=startEquity;
      for(let j=0;j<numberTrades;j++){
        let equityChange=simulationEquity*(riskPercent/100);
        let winChance=Math.floor(Math.random()*100);
        if(winChance<winProbability){
          simulationEquity+= equityChange*winLossRelation;
        } else {
          simulationEquity-= equityChange;
        }
        simulationEquity=Math.round((simulationEquity + Number.EPSILON) * 100) / 100;
        simulationResults[i][j]=simulationEquity;
      }
    }
    res.status(200).json({result: simulationResults, message: "predictions posted"});
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