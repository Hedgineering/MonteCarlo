import { useState } from 'react'
import reactLogo from './assets/react.svg'
import sampleData from './sample-data/sampleEquity.json'
import EquityChart from './components/EquityChart'
import { useEffect } from 'react'

// function App() {
//   const [count, setCount] = useState(0)

//   const smallData  : number[][] = JSON.parse(JSON.stringify(sampleData))["small"];
//   const mediumData : number[][] = JSON.parse(JSON.stringify(sampleData))["medium"];
//   const largeData  : number[][] = JSON.parse(JSON.stringify(sampleData))["large"];
//   const xlargeData : number[][] = JSON.parse(JSON.stringify(sampleData))["xlarge"];

//   console.log("sampleData: " + JSON.stringify(sampleData));
//   console.log("smallData: " + JSON.stringify(smallData));
//   console.log("mediumData: " + JSON.stringify(mediumData));
//   console.log("largeData: " + JSON.stringify(largeData));
//   console.log("xlargeData: " + JSON.stringify(xlargeData));

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <EquityChart data={smallData} />
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }

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
    <div>
      <h1>Equity Chart</h1>
      <EquityChart data={smallData} />
    </div>
  );
};

export default App
