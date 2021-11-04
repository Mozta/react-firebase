import React, { useState, useEffect } from "react";
import db from "../firebase/firebaseConfig";
import { collection, onSnapshot, getDocs } from "firebase/firestore";
import Alumno from "./Alumno";

const ListaAlumnos = () => {
  const [alumnos, setAlumno] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "alumnos"), (snapshot) => {
      //console.log(snapshot.docs[1].data());
      const arregloAlumnos = snapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      console.log(arregloAlumnos);
      setAlumno(arregloAlumnos);
    });
  }, []);

  return (
    <>
      {alumnos.map((alumno) => (
        <Alumno
          key={alumno.id}
          id={alumno.id}
          nombre={alumno.nombre}
          matricula={alumno.matricula}
        />
      ))}

      {/* <ul>
        <li>
          <Alumno key={2} id={1} nombre={"Gabo"} matricula={""} />
        </li>
        <li>
          <Alumno key={3} id={2} nombre={"Eduardo"} matricula={""} />
        </li>
      </ul> */}
    </>
  );
};

export default ListaAlumnos;
