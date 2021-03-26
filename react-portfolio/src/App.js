import React from "react";
import { Header } from "./components/common"
import { Home } from "./components/common"
import { Skills } from "./components/common"
import { Projects } from "./components/common"
import "./App.css"

const App = () => {
  return (
    <div className="container">
      <Header />
      <Home />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
