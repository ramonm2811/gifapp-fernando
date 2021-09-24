//Siempre importar React y los hooks a trabajar
import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

//Definir el componente funcional
function GifExpertApp() {
  /* Definimos nuestras variables de estado, estas nos ayudan a re-renderizar 
nuestra aplicacion con ocurre una modificación */
  const [categories, setCategories] = useState([""]);

  /* Funcion que nos permite agregar ITEMS al state, utilizamos una variable 
  auxiliar debido a que el useState no se puede modificar directamente,
  aquí los pasos son:
  1- Definir la variable aux y darle los valores del array St ate
  2- Hacerle un push con nuestro nuevo valor
  3- Setear el nuevo valor de aux al state. */
  const handleAdd = () => {
    //const aux = [...categories];
    //aux.push("Naruto");
    //setCategories(aux);
    //Tambien puede servir la siguiente forma
  };

  return (
    <div>
      <h2>Gif Expert App</h2>
      <hr />

      <AddCategory setCategories={setCategories} categories={categories} />
      <ol>
        {/* Mapeamos el arreglo categories y extraemos cada ITEM de este, y se le agregamos al KEY 
      y al valor del <li>, Tambien recordamos que el método map recibe 2 atributos .map(item, index) */}
        {categories.map((category) => (
          <GifGrid category={category} key={category} />
        ))}
      </ol>
    </div>
  );
}

//Siempre exportar nuestro componente
export default GifExpertApp;
