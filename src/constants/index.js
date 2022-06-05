export const MONTHS = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

export const CONF_VALUES= {
  "Temperatura": {
    min: 0,
    max: 50,
    magnitude: "(°C)",
    label: "Temperatura"
  },
  "Oxigeno": {
    min: 0,
    max: 20,
    magnitude: "(mg/L)",
    label: "Oxígeno"
  },
  "Ph": {
    min: 0,
    max: 14,
    magnitude: "",
    label: "pH"
  },
};

const LOCAL_HOST_PORT = "http://127.0.0.1:9091";

export const ENDPOINTS = {
  ESTANQUES: `${LOCAL_HOST_PORT}/estanques`,
  VALORES: `${LOCAL_HOST_PORT}/valores?`,
  ESTADISTICAS: `${LOCAL_HOST_PORT}/valores/listaValores?`
};
