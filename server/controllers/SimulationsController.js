const path = require("path");
const { nextPrice } = require("../helpers/formulas.js");

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
 * Returns:
 * ```json
 * ```
 *
 * @param req - HTTP Request
 * @param res - HTTP Response
 */
const postSimulations = async (req, res) => {
  let startEquity = req.body.startEquity;
  const winProbability = req.body.winProbability;
  const winLossRelation = req.body.winLossRelation;
  const riskPercent = req.body.riskPercent;
  const numberTrades = req.body.numberTrades;
  const numberSimulations = req.body.numberSimulations;
  let notNull =
    startEquity != null &&
    winProbability != null &&
    winLossRelation != null &&
    numberTrades != null &&
    numberSimulations != null &&
    riskPercent != null;
  let simulationResults = Array(numberSimulations)
    .fill()
    .map(() => Array(numberTrades).fill(startEquity));

  // object to store simulation statistics
  // for Kelly, Expectation, Max Drawdown, Average Drawdown, Biggest Win, Average Win, Biggest Loss, Average Loss, Min Equity, Max Equity, Average Equity after numberTrades Return on Max Drawdown, Max Consecutive Winner, Max Consecutive Loser
  const statistics = {
    averageEquity: 0,
    expectation: 0,
    kelly: 0,
    maxDrawdown: 0,
    averageDrawdown: 0,
    biggestWin: 0,
    averageWin: 0,
    biggestLoss: 0,
    averageLoss: 0,
    minEquity: 0,
    maxEquity: 0,
    returnOnMaxDrawdown: 0,
    maxConsecutiveWinner: 0,
    maxConsecutiveLoser: 0,
  };

  if (notNull) {

    for (let i = 0; i < numberSimulations; i++) {
      let simulationEquity = startEquity;
      simulationResults[i][0] = startEquity;
      for (let j = 1; j < numberTrades; j++) {
        let equityChange = simulationEquity * (riskPercent / 100);
        let winChance = Math.floor(Math.random() * 100);
        if (winChance < winProbability) {
          simulationEquity += equityChange * winLossRelation;
        } else {
          simulationEquity -= equityChange;
        }
        simulationEquity =
          Math.round((simulationEquity + Number.EPSILON) * 100) / 100;
        simulationResults[i][j] = simulationEquity;
      }
    }

    // calculate average equity
    let totalEquity = 0;
    for (let i = 0; i < numberSimulations; i++) {
      totalEquity += simulationResults[i][numberTrades - 1];
    }
    statistics.averageEquity = totalEquity / numberSimulations;

    // calculate expectation
    statistics.expectation =
      ((winProbability / 100) * winLossRelation -
        (100 - winProbability) / 100);

    // calculate kelly
    statistics.kelly = statistics.expectation / winLossRelation;

    // calculate max drawdown and average drawdown
    let drawdowns = [];
    let maxDrawdown = 0;
    let totalDrawdown = 0;
    for (let i = 0; i < numberSimulations; i++) {
      let maxEquity = 0;
      let drawdown = 0;
      for (let j = 0; j < numberTrades; j++) {
        if (simulationResults[i][j] > maxEquity) {
          maxEquity = simulationResults[i][j];
        } else {
          drawdown = maxEquity - simulationResults[i][j];
          if (drawdown > maxDrawdown) {
            maxDrawdown = drawdown;
          }
          drawdowns.push(drawdown);
        }
      }
    }
    statistics.maxDrawdown = maxDrawdown;
    for (let i = 0; i < drawdowns.length; i++) {
      totalDrawdown += drawdowns[i];
    }
    statistics.averageDrawdown = totalDrawdown / drawdowns.length;

    // calculate biggest win, average win, biggest loss, average loss
    let wins = [];
    let losses = [];
    let biggestWin = 0;
    let biggestLoss = 0;
    let totalWin = 0;
    let totalLoss = 0;
    for (let i = 0; i < numberSimulations; i++) {
      for (let j = 0; j < numberTrades; j++) {
        if (simulationResults[i][j] > startEquity) {
          let win = simulationResults[i][j] - startEquity;
          if (win > biggestWin) {
            biggestWin = win;
          }
          wins.push(win);
        } else if (simulationResults[i][j] < startEquity) {
          let loss = startEquity - simulationResults[i][j];
          if (loss > biggestLoss) {
            biggestLoss = loss;
          }
          losses.push(loss);
        }
      }
    }
    statistics.biggestWin = biggestWin;
    statistics.biggestLoss = biggestLoss;
    for (let i = 0; i < wins.length; i++) {
      totalWin += wins[i];
    }
    for (let i = 0; i < losses.length; i++) {
      totalLoss += losses[i];
    }
    statistics.averageWin = totalWin / wins.length;
    statistics.averageLoss = totalLoss / losses.length;

    // calculate max equity, min equity
    let maxEquity = startEquity;
    let minEquity = startEquity;
    for (let i = 0; i < numberSimulations; i++) {
      for (let j = 0; j < numberTrades; j++) {
        if (simulationResults[i][j] > maxEquity) {
          maxEquity = simulationResults[i][j];
        } else if (simulationResults[i][j] < minEquity) {
          minEquity = simulationResults[i][j];
        }
      }
    }
    statistics.maxEquity = maxEquity;
    statistics.minEquity = minEquity;

    // calculate return on max drawdown
    statistics.returnOnMaxDrawdown = maxDrawdown / statistics.averageEquity;

    // calculate max consecutive winner, max consecutive loser
    let maxConsecutiveWinner = 0;
    let maxConsecutiveLoser = 0;
    for (let i = 0; i < numberSimulations; i++) {
      let consecutiveWinner = 0;
      let consecutiveLoser = 0;
      for (let j = 0; j < numberTrades; j++) {
        if (simulationResults[i][j] > startEquity) {
          consecutiveWinner++;
          consecutiveLoser = 0;
        } else if (simulationResults[i][j] < startEquity) {
          consecutiveLoser++;
          consecutiveWinner = 0;
        }
        if (consecutiveWinner > maxConsecutiveWinner) {
          maxConsecutiveWinner = consecutiveWinner;
        }
        if (consecutiveLoser > maxConsecutiveLoser) {
          maxConsecutiveLoser = consecutiveLoser;
        }
      }
    }
    statistics.maxConsecutiveWinner = maxConsecutiveWinner;
    statistics.maxConsecutiveLoser = maxConsecutiveLoser;

    res
      .status(200)
      .json({ result: simulationResults, statistics, message: "predictions posted" });
  } else {
    res.status(404).json({
      message: "No valid inputs were provided",
    });
  }
};

module.exports = {
  postSimulations,
};
