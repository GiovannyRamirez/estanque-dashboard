export const CONF_VALUES= {
  "Temperatura": {
    min: 0,
    max: 50,
    magnitude: "(°C)",
  },
  "Oxígeno": {
    min: 0,
    max: 20,
    magnitude: "(mg/L)",
  },
  "pH": {
    min: 0,
    max: 14,
    magnitude: "",
  },
}

export const MOCKED_DATA = {
  variables: [
    {
      variableType: "Temperatura",
      value: 24,
      sliders: ["24", "24", "24"],
      alert: "Temperatura baja"
    },
    {
      variableType: "Oxígeno",
      value: 12,
      sliders: ["12", "12",],
      alert: "Oxigeno Alto"
    },
    {
      variableType: "pH",
      value: 7,
      sliders: ["7", "7", "6", "8"],
      alert: "pH Óptimo"
    },
  ]  
}
