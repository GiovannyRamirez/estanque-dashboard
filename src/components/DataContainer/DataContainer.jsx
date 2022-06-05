import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { ENDPOINTS } from "../../constants";

import SensorContainer from "../SensorContainer/SensorContainer";
import Statistics from "../Statistics/Statistics";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";

import "./style.css";

const DataContainer = ({ currentEstanque }) => {
  const [currentVariable, setCurrentVariable] = useState(0);
  const [listaSensores, setListaSensores] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `${ENDPOINTS.VALORES}idEstanque=${currentEstanque}`
        );
        const { listaSensores } = await response.json();
        setListaSensores(listaSensores);
      } catch (err) {
        setError("Algo salió mal con los datos");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [currentEstanque]);

  return (
    <>
      {loading && <Loader />}
      {error && <Error message={error} />}
      <div className="Data__container">
        {listaSensores.map(
          ({ id, nombre, promedio, mensaje, color, listValores }) => {
            if (listValores.length === 0) return null;
            return (
              <SensorContainer
                key={`${nombre}-${id}`}
                {...{
                  currentVariable,
                  setCurrentVariable,
                  id,
                  nombre,
                  promedio,
                  mensaje,
                  color,
                  listValores,
                }}
              />
            );
          }
        )}
      </div>
      <Statistics {...{ currentVariable, currentEstanque }} />
    </>
  );
};

DataContainer.propTypes = {
  currentEstanque: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
};

export default DataContainer;
