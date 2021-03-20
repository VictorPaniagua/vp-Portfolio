import React from "react";
import { Header } from "./components/common"
import { Greet } from "./components/common"
import { Skills } from "./components/common"
import { Projects } from "./components/common"

const App = () => {
  return (
    <div className="container">
      <Header />
      <Greet />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
