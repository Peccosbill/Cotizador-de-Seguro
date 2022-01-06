export function getYearDifference(year) {
  return new Date().getFullYear() - year;
}

export function calculateBrand(modelo) {
  let incremento;

  switch (modelo) {
    case "europeo":
      incremento = 1.3;
      break;
    case "americano":
      incremento = 1.15;
      break;
    case "asiatico":
      incremento = 1.05;
      break;
    default:
      break;
  }
  return incremento;
}

export function getPlan(plan) {
  return plan === "basico" ? 1.2 : 1.5;
}

export function firstUpperCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
