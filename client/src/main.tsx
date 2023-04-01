import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import customTheme from "./utils/Theme";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
