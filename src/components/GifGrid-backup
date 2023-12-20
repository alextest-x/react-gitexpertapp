import React, { useState, useEffect } from 'react';
import { GifGridItem } from './GifGridItem';
import { getGifs } from '../helpers/getGifs';

//recibimos category como argumento 
export const GifGrid = ({ category }) => {

    //para trae las imagenes 
    //useEffect se ejecuta una sola vez 
    //const [count, setCount] = useState(0);
     const [images, setImages] = useState([]);
     useEffect( () => {
     // getGifs();  //importamos getGifs() porque movimos el fecth y le ponemos la categoria
     // y le ponemos el then donde mandamos a la funcion setImages
     //  getGifs( category ).then( imgs => setImages (imgs) );
         getGifs( category ).then( setImages );  //optimizado

    //el segundo argumento que enviamos es una lista de dependencias
    }, [ category ])  //ponemos la categoria en las llaves para enviar la dependencia de la categoria
  
    /* se pone la peticion fecth en el helpers/getGifs.js
       const getGifs = async( category ) => {
       const url= https://
    */

  return (
    <>

    <h3>  {category}   </h3>
    
    <h3>  Obteniendo las imagenes   </h3>
    
    <div className="card-grid">
        {
          images.map( img => (
            <GifGridItem 
             key={ img.id }
             {...img}
            />
          ))
        }
      
      </div>
   </>
      
  )
}

