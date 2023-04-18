import { useState, useEffect, StrictMode } from "react";
import RootLayout from "./layouts/RootLayout";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import NavHeader from "./components/NavHeader";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";

const App: React.FC = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  if (!isReady) {
    return <div>Loading...</div>;
  }

  const serverIp : string = import.meta.env.VITE_SERVER_IP|| "http://localhost:5002";
  if(!serverIp || serverIp === "http://localhost:5002") {
    console.log("Server IP not set. Using default: http://localhost:5002; Will not work in production.");
  } else {
    console.log("Server IP set to: " + serverIp);
    console.log("Granted env: " + import.meta.env);
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Dashboard serverIp={serverIp}/>} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
