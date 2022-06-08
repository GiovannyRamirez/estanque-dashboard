import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";

import { ENDPOINTS, PERIOD_TO_FETCH } from "../../constants";

import SensorContainer from "../SensorContainer/SensorContainer";
import Statistics from "../Statistics/Statistics";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";

import "./style.css";

const DataContainer = ({
  currentEstanque,
  currentVariable,
  setCurrentVariable,
}) => {
  const [listaSensores, setListaSensores] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = useCallback(async () => {
    setListaSensores([]);
    setLoading(true);
    setError("");
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
  }, [currentEstanque]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchData();
    }, PERIOD_TO_FETCH);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <>
      {loading && <Loader />}
      {error && <Error message={error} />}
      <div className="Data__container">
        {!!listaSensores.length &&
          listaSensores.map(
            ({ id, nombre, promedio, mensaje, color, listValores }) => {
              if (listValores.length === 0) {
                return null;
              }
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
  currentVariable: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
  setCurrentVariable: PropTypes.func.isRequired,
};

export default DataContainer;
