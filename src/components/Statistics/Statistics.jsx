import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

import { ENDPOINTS } from "../../constants";
import { convertDatasets, convertLabels } from "./utils";

import Error from "../Error/Error";
import Loader from "../Loader/Loader";

import "./style.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

const Statistics = ({ currentEstanque, currentVariable }) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [dataToGraphic, setDataToGraphic] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `${ENDPOINTS.ESTADISTICAS}tipoSensor=${currentVariable}&idEstanque=${currentEstanque}`
        );
        const { labels, listValores } = await response.json();
        const formattedLabel = convertLabels(labels);
        const datasets = convertDatasets(listValores);
        setDataToGraphic({
          labels: formattedLabel,
          datasets,
        });
      } catch (err) {
        setError("Algo salió mal con las estadísticas");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [currentEstanque, currentVariable]);

  return (
    <div className="Statistics__container">
      {loading && <Loader />}
      {error && <Error message={error} />}
      {currentVariable ? (
        <Line options={options} data={dataToGraphic} />
      ) : (
        <h4 className="Statistics__label">
          Selecciona una de las variables para ver sus estadísticas
        </h4>
      )}
    </div>
  );
};

Statistics.propTypes = {
  currentVariable: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  currentEstanque: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
};

export default Statistics;
