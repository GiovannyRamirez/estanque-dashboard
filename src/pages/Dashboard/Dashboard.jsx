import React, { useState, useEffect } from "react";

import { ENDPOINTS } from "../../constants";

import Error from "../../components/Error/Error";
import Header from "../../components/Header/Header";
import DataContainer from "../../components/DataContainer/DataContainer";

import "./style.css";

const Dashboard = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [estanques, setEstanques] = useState([]);
  const [currentEstanque, setCurrentEstanque] = useState(0);
  const [currentVariable, setCurrentVariable] = useState(0);

  useEffect(() => {
    const fetchEstanques = async () => {
      setLoading(true);
      try {
        const response = await fetch(ENDPOINTS.ESTANQUES);
        const estanques = await response.json();
        setEstanques(estanques);
        setCurrentEstanque(estanques[0].id);
      } catch (err) {
        setError("Algo salió mal con los estanques");
      } finally {
        setLoading(false);
      }
    };
    fetchEstanques();
  }, []);

  return (
    <div className="Dashboard__container">
      {error ? (
        <Error message={error} />
      ) : (
        <>
          <Header
            {...{
              estanques,
              loading,
              setCurrentEstanque,
              setCurrentVariable,
              currentVariable,
            }}
          />
          {currentEstanque !== 0 && (
            <DataContainer
              {...{ currentEstanque, currentVariable, setCurrentVariable }}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Dashboard;
