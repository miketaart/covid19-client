import React from "react";
import Navbar from "./components/navbar/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
    <Navbar />
    <div className="App__Content">
      <Dashboard />
      <Home />
    </div>
    </div>
  );
}

export default App;