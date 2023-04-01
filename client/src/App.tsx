import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react'
import RootLayout from './layouts/RootLayout';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  if (!isReady) {
    return <div>Loading...</div>;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Dashboard />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  );
};

export default App
