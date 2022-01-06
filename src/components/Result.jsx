import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../css/Result.css";

function Result({ result }) {
  function showResult() {
    const resultado = result;
    const mensaje = !resultado
      ? "Elige Marca, Año y Tipo de Seguro"
      : "El Total es $";
    return (
      <div className="granTotal">
        {mensaje}
        <TransitionGroup component="span" className="transition">
          <CSSTransition
            key={resultado}
            timeout={500}
            classNames="transition"
          >
            <span>{resultado}</span>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }

  return <div>{showResult()}</div>;
}

export default Result;
