import classNames from "classnames";
import { useState } from "react";
import binaryToDecimal from "../../helpers/binaryToDecimal";
import checkBinary from "../../helpers/checkBinary";
import styles from "./converter.module.css";

function Converter() {
  const [output, setOutput] = useState("0");
  const errorMessage = "Wrong input, please enter either 0 or 1";

  const classes = classNames(
    { [styles.result]: output !== errorMessage },
    { [styles.wrongInput]: output === errorMessage }
  );

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    checkBinary(e.target.value)
      ? setOutput(binaryToDecimal(e.target.value))
      : setOutput(errorMessage);
  }

  return (
    <div className={styles.container}>
      <input type="number" name="binary" onChange={handleChange} />
      <div className={classes}>{output}</div>
    </div>
  );
}

export default Converter;
