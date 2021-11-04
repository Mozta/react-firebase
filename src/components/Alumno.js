import React, { useState } from "react";

const Alumno = ({ id, nombre, matricula }) => {
  return <h2 key={id}>{nombre}</h2>;
};

export default Alumno;
