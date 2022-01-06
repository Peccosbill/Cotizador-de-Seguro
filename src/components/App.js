import { Component } from "react";
import Header from "./Header";
import Formulario from "./Formulario";
import { getYearDifference, calculateBrand, getPlan } from "../helper";
import Resume from "./Resume";
import "animate.css";
import styles from "../css/App.module.css";

class App extends Component {
  state = {
    result: "",
    data: {},
  };

  cotizarSeguro = (data) => {
    const { brand, plan, year } = data;

    //Agregar una base de 2000;
    let result = 2000;

    //Obtener la diferencia de años y
    const difference = getYearDifference(year);

    //por cada año restar el 3% al valor del seguro
    result -= (difference * 3 * result) / 100;

    //Americano 15% Asiatico 5% y Europeo 30% de incremento al valor actual
    result = calculateBrand(brand) * result;

    //El plan basico incrementa el valor 20% y cobertura completa 50%
    result = parseFloat(getPlan(plan) * result).toFixed(2);

    //Resumen
    const dataCar = {
      brand: brand,
      plan: plan,
      year: year,
    };

    //Ya tenemos el costo
    this.setState({
      result: result,
      data: dataCar,
    });
  };

  render() {
    return (
      <div className={`${styles.contenedor} ${"animate__animated animate__flipInX"}`}>
        <Header title="Cotizador de seguros de Auto" />
        <div className={styles.contenedorFormulario}>
          <Formulario cotizarSeguro={this.cotizarSeguro} />
        </div>
        <Resume data={this.state.data} result={this.state.result} />
      </div>
    );
  }
}

export default App;
