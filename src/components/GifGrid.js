import React, { useState, useEffect } from "react";
import GifGridItem from "./GifGridItem";

//Componente funcional
const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  //useEffect es un Hook que me ayuda a que ejecute una función exclusivamente en su primera renderización
  useEffect(() => {
    getGifs();
  }, []);

  /* Funcion que:
    1- Hace la peticion a la API
    2-  Almacena la respuesta y la transforma a json
    3-  Recibe la data de dónde extraeremos la informacion que necesitamos. 
    4- Creamos nuestro propio objeto con la informacion que extraemos.*/
  const getGifs = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
      category
    )}&limit=9&api_key=CY1eHEkPcygchISihJzbrCUxyPYt8ffV`;

    const resp = await fetch(url);

    const { data } = await resp.json();

    const gifs = data.map((gif) => {
      return {
        id: gif.id,
        imgUrl: gif.images.original.url,
        imgName: gif.title,
      };
    });

    setImages(gifs);
  };

  return (
    <>
      <h2>{category}</h2>
      <ol>
        {images.map((img) => {
          return <GifGridItem img={img} key={img.id} />;
        })}
      </ol>
    </>
  );
};

export default GifGrid;
