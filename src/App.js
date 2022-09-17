import Sidebar from "./components/Sidebar";
import React from "react";
import './App.css'
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Sidebar/>
    </Router>
    </div>
  );
}

export default App;
