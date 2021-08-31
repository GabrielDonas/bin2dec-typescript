import React from "react";
import styles from "./header.module.css";

function Header({ title }: { title: string }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title} data-testid="header">
        {title}
      </h1>
    </div>
  );
}

export default Header;
