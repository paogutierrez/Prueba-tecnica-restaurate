import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { endPoint } from "../helpers/Data";

const Plato = () => {
  const [ setIngredientes] = useState([]);

  const obtenerDatos = async () => {
    const data = await fetch(endPoint).then((resp) => resp.json());
    setIngredientes(data.results);
  };

  useEffect(() => {
    obtenerDatos();
  });
  return (
    <div>
      <span>Ingredientes</span>

      <h1>Rissoto de setas Vegano</h1>
      <>
        <Form.Group className="mb-3">
          <Form.Check type="checkbox" label="Can't check this" disabled />
          <Form.Label></Form.Label>
          <p></p>
          <p></p>
        </Form.Group>
      </>
    </div>
  );
};

export default Plato;
