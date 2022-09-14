import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import Router from "./routes/router";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Router />
      <ToastContainer />
    </div>
  );
}

export default App;
