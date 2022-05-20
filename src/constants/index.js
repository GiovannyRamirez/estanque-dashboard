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

export const MOCKED_GRAPHIC_DATA = {
  labels: ["Ene", "Feb"],
  datasets: [
    {
      label: "Sensor 1",
      data: [10.5, 9.7],
      borderColor: "blue",
      backgroundColor: "blue",
    },
    {
      label: "Sensor 2",
      data: [12.5, 19.7],
      borderColor: "green",
      backgroundColor: "green",
    },
    {
      label: "Sensor 3",
      data: [17.5, 0.7],
      borderColor: "pink",
      backgroundColor: "pink",
    },
    {
      label: "Sensor 4",
      data: [2.5, -2.5],
      borderColor: "purple",
      backgroundColor: "purple",
    },
    {
      label: "Sensor 5",
      data: [4, 1],
      borderColor: "cyan",
      backgroundColor: "cyan",
    },
  ]
}
