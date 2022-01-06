import React from "react";
import { firstUpperCase } from "../helper";
import Result from "./Result";
import "animate.css";
import styles from "../css/Resume.module.css";

function Resume({ data, result }) {
  const showSummary = () => {
    const { brand, year, plan } = data;
    if (!brand || !year || !plan) return null;
    return (
      <div className={`${styles.resume} ${"animate__animated animate__flipInX"}`}>
        <h2>Resumen de Cotización</h2>
        <ul>
          <li>
            Marca: <span>{firstUpperCase(data.brand)}</span>
          </li>
          <li>
            Año del Auto: <span>{data.year}</span>
          </li>
          <li>
            Plan: <span>{firstUpperCase(data.plan)}</span>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <div>
      {showSummary()}
      <Result result={result} />
    </div>
  );
}

export default Resume;
