import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import sampleData from './sample-data/sampleEquity.json'
import EquityChart from './components/EquityChart'
import { useEffect } from 'react'
import { Container } from 'react-bootstrap'

const App: React.FC = () => {
  const [isReady, setIsReady] = useState(false);
  const smallData  : number[][] = JSON.parse(JSON.stringify(sampleData))["small"];
  const mediumData : number[][] = JSON.parse(JSON.stringify(sampleData))["medium"];
  const largeData  : number[][] = JSON.parse(JSON.stringify(sampleData))["large"];
  const xlargeData : number[][] = JSON.parse(JSON.stringify(sampleData))["xlarge"];

  useEffect(() => {
    setIsReady(true);
  }, []);

  if (!isReady) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <h2 className='text-center'>Small Equity Chart</h2>
      <EquityChart data={smallData} />

      <h2 className='text-center'>Medium Equity Chart</h2>
      <EquityChart data={mediumData} />

      <h2 className='text-center'>Large Equity Chart</h2>
      <EquityChart data={largeData} />

      <h2 className='text-center'>X-Large Equity Chart</h2>
      <EquityChart data={xlargeData} />
    </Container>
  );
};

export default App
