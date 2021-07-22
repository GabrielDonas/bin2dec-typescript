import { useState } from "react";
import styles from "./converter.module.css";

function Converter() {
  const [userInput, setUserInput] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUserInput(e.target.value);
  }

  return (
    <div className={styles.container}>
      <input type="number" name="binary" onChange={handleChange} />
      <div>{userInput}</div>
    </div>
  );
}

export default Converter;
