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
}

export const MOCKED_DATA = {
  listaSensores: [
    {
      id: 1,
      nombre: "Oxigeno",
      promedio: 9.0,
      mensaje: "Buen Oxigeno",
      color: "black",
      listValores: [
        {
          idsensor: 1,
          valor: 7.0,
          fecha: "2022-05-18T20:33:39.000+00:00",
        },
        {
          idsensor: 2,
          valor: 8.0,
          fecha: "2022-05-18T20:33:39.000+00:00",
        },
        {
          idsensor: 3,
          valor: 9.0,
          fecha: "2022-05-18T20:33:39.000+00:00",
        },
        {
          idsensor: 4,
          valor: 10.0,
          fecha: "2022-05-18T20:33:39.000+00:00",
        },
        {
          idsensor: 5,
          valor: 11.0,
          fecha: "2022-05-18T20:33:39.000+00:00",
        },
      ],
    },
    {
      id: 2,
      nombre: "Temperatura",
      promedio: 9.33333334,
      mensaje: "Temperatura Baja",
      color: "blue",
      listValores: [
        {
          idsensor: 6,
          valor: 10.0,
          fecha: "2022-05-18T20:33:39.000+00:00",
        },
        {
          idsensor: 7,
          valor: 8.0,
          fecha: "2022-05-18T20:33:39.000+00:00",
        },
        {
          idsensor: 10,
          valor: 10.0,
          fecha: "2022-05-18T20:33:39.000+00:00",
        },
      ],
    },
    {
      id: 3,
      nombre: "Ph",
      promedio: 12.0,
      mensaje: "PH demasiado alcalino",
      color: "red",
      listValores: [
        {
          idsensor: 11,
          valor: 12.0,
          fecha: "2022-05-18T20:33:39.000+00:00",
        },
        {
          idsensor: 12,
          valor: 12.0,
          fecha: "2022-05-18T20:33:39.000+00:00",
        },
        {
          idsensor: 13,
          valor: 12.0,
          fecha: "2022-05-18T20:33:39.000+00:00",
        },
      ],
    },
  ]  
}
