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

const LOCAL_HOST_PORT = "http://192.168.0.20:9091";

export const ENDPOINTS = {
  ESTANQUES: `${LOCAL_HOST_PORT}/estanques`,
  VALORES: `${LOCAL_HOST_PORT}/valores?`,
  ESTADISTICAS: `${LOCAL_HOST_PORT}/valores/listaValores?`
};
