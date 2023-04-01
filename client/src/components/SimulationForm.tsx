import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

type SimulationFormProps = {
  setData: React.Dispatch<React.SetStateAction<number[][]>>;
};

const SimulationForm: React.FC<SimulationFormProps> = ({ setData }) => {
  const [startEquity, setStartEquity] = useState("");
  const [winProbability, setWinProbability] = useState("");
  const [winLossRelation, setWinLossRelation] = useState("");
  const [numTrades, setNumTrades] = useState("");
  const [numSimulations, setNumSimulations] = useState("");
  const [riskPerTrade, setRiskPerTrade] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await fetch("http://localhost:5000/api/simulate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        startEquity: parseFloat(startEquity),
        winProbability: parseFloat(winProbability),
        winLossRelation: parseFloat(winLossRelation),
        numTrades: parseInt(numTrades),
        numSimulations: parseInt(numSimulations),
        riskPerTrade: parseFloat(riskPerTrade),
      }),
    });

    const responseData = await response.json();
    setData(responseData.results);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col>
          <Form.Group controlId="startEquity">
            <Form.Label>Start Equity</Form.Label>
            <Form.Control
              type="number"
              value={startEquity}
              onChange={(e) => setStartEquity(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="winProbability">
            <Form.Label>Win Probability</Form.Label>
            <Form.Control
              type="number"
              value={winProbability}
              onChange={(e) => setWinProbability(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="winLossRelation">
            <Form.Label>Win/Loss Relation</Form.Label>
            <Form.Control
              type="number"
              value={winLossRelation}
              onChange={(e) => setWinLossRelation(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlId="numTrades">
            <Form.Label>Number of Trades</Form.Label>
            <Form.Control
              type="number"
              value={numTrades}
              onChange={(e) => setNumTrades(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="numSimulations">
            <Form.Label>Number of Simulations</Form.Label>
            <Form.Control
              type="number"
              value={numSimulations}
              onChange={(e) => setNumSimulations(e.target.value)}
              min={1}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="riskPerTrade">
            <Form.Label>Risk % per Trade</Form.Label>
            <Form.Control
              type="number"
              value={riskPerTrade}
              onChange={(e) => setRiskPerTrade(e.target.value)}
              min={1}
              max={100}
            />
          </Form.Group>
        </Col>
      </Row>
      <div className="d-flex justify-content-center">
        <Button variant="primary" type="submit" className="my-4">
          Simulate
        </Button>
      </div>
    </Form>
  );
};

export default SimulationForm;