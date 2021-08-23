import { useState } from "react";
import binaryToDecimal from "../../helpers/binaryToDecimal";
import checkBinary from "../../helpers/checkBinary";
import styles from "./converter.module.css";

function Converter() {
  const [output, setOutput] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const userInputValue = checkBinary(e.target.value);
    if (userInputValue) {
      const binaryValue = binaryToDecimal(e.target.value);
      setOutput(binaryValue);
    } else {
      setOutput("Wrong Input, please enter either 0 or 1");
    }
  }

  return (
    <div className={styles.container}>
      <input type="number" name="binary" onChange={handleChange} />
      <div>{output}</div>
    </div>
  );
}

export default Converter;
