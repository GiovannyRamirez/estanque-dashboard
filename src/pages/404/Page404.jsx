import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const Page404 = () => (
  <div className="Content">
    <p className="Content__message">Lo sentimos, esta página no existe</p>
    <Link className="Content__redirect" to="/">
      Ir al inicio
    </Link>
  </div>
);

export default Page404;
