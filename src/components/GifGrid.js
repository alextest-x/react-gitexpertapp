import React, { useState, useEffect } from 'react';
import { GifGridItem } from './GifGridItem';


//recibimos category como argumento 
export const GifGrid = ({ category }) => {

    //para trae las imagenes 
    //useEffect se ejecuta una sola vez 
    //const [count, setCount] = useState(0);
     const [images, setImages] = useState([]);
     useEffect( () => {
     getGifs();
    //el segundo argumento que enviamos es una lista de dependencias
    }, [])
  

    const getGifs = async() => {
     const url= 'https://api.giphy.com/v1/gifs/search?api_key=gjJZIsW3BoojybBxoLExJrcuwSYJo822&q=hola&limit=10';
     const resp = await fetch ( url );
     const { data } = await resp.json();
    
     // barre cada una de la imagenes 
     // img trae los datos de la data 
     // y retorna como un nuevo objeto que vamos a ocupar
     const gifs = data.map( img => {
          return {
             id: img.id,
             title: img.title,
             //? indica que si tiene imagenes las muestra sino no 
             url: img.images?.downsized_medium.url
          }
     })

     console.log(gifs);
     //el nuevo estado son los gift que esta recibiendo y obtiene las imagenes
     setImages( gifs );

    // si se utiliza el setImagen se hace un ciclo
    //por eso hay que usar el useEffect
    //console.log({data}); // resestructurando para traer los datos que necesito
    
  }

  return (

    <>
      
     <h3>  Obteniendo las imagenes   </h3>
     <h3>  {/* category */ }   </h3>
        {
          images.map( img => (
            <GifGridItem 
             key={ img.id }
             {...img}
            />
          ))
        }
   
   </>
      
  )
}

