import React from "react";
import Header from "./components/header/Header";
import Converter from "./components/converter/Converter";
import "./reset.css";

function App() {
  return (
    <React.Fragment>
      <Header title="React Bin2Dec" />
      <Converter />
    </React.Fragment>
  );
}

export default App;
