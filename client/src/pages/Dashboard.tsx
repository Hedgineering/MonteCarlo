import React, {useState} from "react";
import sampleData from '../sample-data/sampleEquity.json';
import EquityChart from '../components/EquityChart';
import { Container } from 'react-bootstrap';
import SimulationForm from '../components/SimulationForm';

/* The format of statistics is as follows
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
*/

// make a type for a statistics object
export interface SimulationStatistics {
  averageEquity: number;
  expectation: number;
  kelly: number;
  maxDrawdown: number;
  averageDrawdown: number;
  biggestWin: number;
  averageWin: number;
  biggestLoss: number;
  averageLoss: number;
  minEquity: number;
  maxEquity: number;
  returnOnMaxDrawdown: number;
  maxConsecutiveWinner: number;
  maxConsecutiveLoser: number;
}

// Define a type for the props of the Dashboard component, which is just the serverIp
type DashboardProps = {
  serverIp: string;
}

export default function Dashboard({serverIp}: DashboardProps) {
  const [data, setData] = useState<number[][]>([]);
  const [statistics, setStatistics] = useState<SimulationStatistics>({} as SimulationStatistics);

  // const smallData  : number[][] = JSON.parse(JSON.stringify(sampleData))["small"];
  // const mediumData : number[][] = JSON.parse(JSON.stringify(sampleData))["medium"];
  // const largeData  : number[][] = JSON.parse(JSON.stringify(sampleData))["large"];
  // const xlargeData : number[][] = JSON.parse(JSON.stringify(sampleData))["xlarge"];


  return (
    <Container>
      <h2 className="text-center">Basic Simulation</h2>
      <SimulationForm setData={setData} setStatistics={setStatistics} serverIp={serverIp} />

      {/* Show Chart if data is filled */}
      {data.length > 0 && <EquityChart data={data} />}

      {/* Show Statistics if data is filled */}
      {data.length > 0 && <h2>Statistics</h2>}
      {data.length > 0 && <p>averageEquity: {statistics.averageEquity}</p>}
      {data.length > 0 && <p>expectation: {statistics.expectation}</p>}
      {data.length > 0 && <p>kelly: {statistics.kelly}</p>}
      {data.length > 0 && <p>maxDrawdown: {statistics.maxDrawdown}</p>}
      {data.length > 0 && <p>averageDrawdown: {statistics.averageDrawdown}</p>}
      {data.length > 0 && <p>biggestWin: {statistics.biggestWin}</p>}
      {data.length > 0 && <p>averageWin: {statistics.averageWin}</p>}
      {data.length > 0 && <p>biggestLoss: {statistics.biggestLoss}</p>}
      {data.length > 0 && <p>averageLoss: {statistics.averageLoss}</p>}
      {data.length > 0 && <p>minEquity: {statistics.minEquity}</p>}
      {data.length > 0 && <p>maxEquity: {statistics.maxEquity}</p>}
      {data.length > 0 && <p>returnOnMaxDrawdown: {statistics.returnOnMaxDrawdown}</p>}
      {data.length > 0 && <p>maxConsecutiveWinner: {statistics.maxConsecutiveWinner}</p>}
      {data.length > 0 && <p>maxConsecutiveLoser: {statistics.maxConsecutiveLoser}</p>}

    </Container>
  );
}
