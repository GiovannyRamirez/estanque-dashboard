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
  Temperatura: {
    labels: ["11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30"],
    datasets: [
      {
        label: "Sensor 1",
        data: [9, 9.5, 9.3, 8.7, 10.7, 11, 19, 9.3].reverse(),
        borderColor: "blue",
        backgroundColor: "blue",
      },
      {
        label: "Sensor 2",
        data: [9.2, 9, 9.7, 8.2, 12.8, 11.9, 19, 9.3].reverse(),
        borderColor: "green",
        backgroundColor: "green",
      },
      {
        label: "Sensor 3",
        data: [9.4, 8.7, 9.2, 8.7, 12, 11.2, 18.1, 9.7].reverse(),
        borderColor: "pink",
        backgroundColor: "pink",
      },
      {
        label: "Sensor 4",
        data: [9.1, 8.8, 9.3, 8.1, 12.3, 11, 18.7, 10].reverse(),
        borderColor: "purple",
        backgroundColor: "purple",
      },
      {
        label: "Sensor 5",
        data: [9.4, 9.4, 10, 9, 11.5, 10.8, 17.2, 13].reverse(),
        borderColor: "cyan",
        backgroundColor: "cyan",
      },
    ]
  },
  Oxigeno: {
    labels: ["11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30"],
    datasets: [
      {
        label: "Sensor 1",
        data: [7, 8, 9, 7, 9, 8, 7.5, 8.3],
        borderColor: "blue",
        backgroundColor: "blue",
      },
      {
        label: "Sensor 2",
        data: [7.2, 8.4, 9.7, 6.7, 8.9, 7.8, 7.9, 8],
        borderColor: "green",
        backgroundColor: "green",
      },
    ]
  },
  Ph: {
    labels: ["11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30"],
    datasets: [
      {
        label: "Sensor 1",
        data: [2, 6, 9, 12, 6.4, 7.4, 10, 6.8],
        borderColor: "blue",
        backgroundColor: "blue",
      },
      {
        label: "Sensor 2",
        data: [2.5, 5.6, 7.9, 11.4, 6, 7.9, 9.8, 7.2],
        borderColor: "green",
        backgroundColor: "green",
      },
      {
        label: "Sensor 3",
        data: [3, 4.3, 8.2, 11.8, 6.5, 8.2, 9, 7.1],
        borderColor: "pink",
        backgroundColor: "pink",
      },
    ]
  },
}
