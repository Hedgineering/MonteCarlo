import React, {useState} from "react";
import sampleData from '../sample-data/sampleEquity.json';
import EquityChart from '../components/EquityChart';
import { Container } from 'react-bootstrap';
import SimulationForm from '../components/SimulationForm';


export default function Dashboard() {
  const [data, setData] = useState<number[][]>([]);

  // const smallData  : number[][] = JSON.parse(JSON.stringify(sampleData))["small"];
  // const mediumData : number[][] = JSON.parse(JSON.stringify(sampleData))["medium"];
  // const largeData  : number[][] = JSON.parse(JSON.stringify(sampleData))["large"];
  // const xlargeData : number[][] = JSON.parse(JSON.stringify(sampleData))["xlarge"];

  return (
    <Container>
      <h2 className="text-center">Basic Simulation</h2>
      <SimulationForm setData={setData} />

      {/* Show Chart if data is filled */}

      {data.length > 0 && <EquityChart data={data} />}

    </Container>
  );
}
