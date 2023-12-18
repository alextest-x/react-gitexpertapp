//rafc crea el snipe

import React from 'react'
//con img se recibe la imagen 

//export const GifGridItem = ( img) => {

/* tambien se puede hacer de esta forma poniendo las propiedades ( id, title, url ) 
  // export const GifGridItem = ( id, title, url ) => {
    
  //console.log( id, title, url);
   
  //desestructuramos { img.title } y nos queda { title }
 */

  export const GifGridItem = ( {title, url} ) => {
  return (
    <div>
       <img src= { url }  alt= { title } />
       <p> { title } </p>
      
    </div>
  )
}


/*
//utilizando props para traer las propiedades
export const GifGridItem = ( props  => {

    //console.log(img);
    //recibe con props como una propiedad 
    console.log(props);

  return (
    
    <div>
    {  img.title }
    </div>

  )})
}
*/