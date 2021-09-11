import { Fragment } from "react";
import "./styles/global.css";

import Converter from "./components/converter/Converter";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  return (
    <Fragment>
      <Header title="React Bin2Dec" />
      <Converter />
      <Footer />
    </Fragment>
  );
}

export default App;
