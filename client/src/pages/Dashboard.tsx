import React, {useState} from "react";
import sampleData from '../sample-data/sampleEquity.json';
import EquityChart from '../components/EquityChart';
import { Container } from 'react-bootstrap';
import SimulationForm from '../components/SimulationForm';


export default function Dashboard() {
  const [data, setData] = useState<number[][]>([]);

  const smallData  : number[][] = JSON.parse(JSON.stringify(sampleData))["small"];
  const mediumData : number[][] = JSON.parse(JSON.stringify(sampleData))["medium"];
  const largeData  : number[][] = JSON.parse(JSON.stringify(sampleData))["large"];
  const xlargeData : number[][] = JSON.parse(JSON.stringify(sampleData))["xlarge"];

  return (
    <Container>
      <h2 className="text-center">Basic Simulation</h2>
      <SimulationForm setData={setData} />

      <h2 className="text-center">Small Equity Chart</h2>
      <EquityChart data={smallData} />

      <h2 className="text-center">Medium Equity Chart</h2>
      <EquityChart data={mediumData} />

      <h2 className="text-center">Large Equity Chart</h2>
      <EquityChart data={largeData} />

      <h2 className="text-center">X-Large Equity Chart</h2>
      <EquityChart data={xlargeData} />
    </Container>
  );
}
