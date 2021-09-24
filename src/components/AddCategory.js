import React, { useState } from "react";
import PropTypes from "prop-types";

function AddCategory({ setCategories, categories }) {
  /* Utilizaremos un State para poder capturar el valor del input */
  const [inputValue, setinputValue] = useState("");

  /* Definimos la función handleChange que nos permitirá entregarle el valor del input al State y a que se pueda 
  mostrar las modificaciones en el input*/
  const handleChange = (e) => {
    setinputValue(e.target.value);
  };
  /* Cada vez que Hagamos submit del form vamos a agregarle el valor del input al estado en el 
componente GifExpertApp, esto se logra recibiendo la función setCategories a través de los props. 
    Al hacer ENTER se hace el submit*/
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue !== "") {
      setCategories([inputValue, ...categories]);
      setinputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleChange} />
    </form>
  );
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
};

export default AddCategory;

/* Este componente esta diseñado para crear el buscador que nos permitirá buscar los gif que queramos */
