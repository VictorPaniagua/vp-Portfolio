import React from "react";
import { Header } from "./components/common"
import { Home } from "./components/common"
import { Skills } from "./components/common"
import { Projects } from "./components/common"
import { Contact } from "./components/common"
import { Footer } from "./components/common"
// import { Background } from "./components/common"
import "./App.css"

const App = () => {
  return (
    <div className="container">
      <Header />
      <Home />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      {/* <Background /> */}
    </div>
  );
}

export default App;
