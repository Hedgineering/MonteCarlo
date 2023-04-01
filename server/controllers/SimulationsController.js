const path = require("path");
const { 
    nextPrice
} = require("../helpers/formulas.js");

/**
 * Takes request with desired start equity, win probability, win loss relation,
 * equity risk percent, number of trades and number of simulations. 
 * 
 * Expects:
 * ```json
 * { "startEquity": int, "winProbability": int, "winLossRelation": float, "numberTrades": int, "numberSimulations": int, "riskPercent": int}
 * ```
 * 
 * startEquity should be an int, required
 * 
 * winProbability should be an int between 1 and 100 percent, required
 * 
 * winLossRelation should be a float ratio of percent returned : percent lost (ex. 2 you win twice the amount you risk or 0.5 you win half the amount you risk), required
 * 
 * numberTrades should be an int, required
 * 
 * numberSimulation should be an int, required
 * 
 * riskPercent should be an int, required
 * 
 * @param req - HTTP Request
 * @param res - HTTP Response
 */
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
    res
      .status(200)
      .json({ result: simulationResults, message: "predictions posted" });
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