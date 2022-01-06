import React from "react";
import styles from "../css/Header.module.css";

function Header(props) {
  return (
    <header className={styles.top}>
      <h1>{props.title}</h1>
    </header>
  );
}

export default Header;
