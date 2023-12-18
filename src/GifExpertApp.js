import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {
 

    /*
    //se usa el map para traer el arreglo de categorias
    const categorias = [ 'One Punch', 'Samarai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(categorias);
    
    const [categories, setCategories] = useState([ 'One Punch', 'Samarai X', 'Dragon Ball']);

    */
     
    //envia a la caja de texto de busquedad 
    const [categories, setCategories] = useState([ 'hola']);
  

    //para poner un nuevo elemento en la lista usamos el setCategories
    //const handleAdd = () => {
   
    //agregando un elemento con spred al final de la lista
    //setCategories( [...categories, 'Personaje X'] );
    
    //agregando un elemento con spred al inicio de la lista
    //  setCategories( ['Personaje X', ...categories] );

    //de otra forma para agregar un elemento usando un callback
    //setCategories( cats => [...cats, 'Personaje X']);

    // }


  /*
   enviamos la propiedad
   para enviar la referencia con setCategories a AddCategory
  
   <AddCategory setCategories={ setCategories} />

   <ol>
    { categories.map( category => { return <li key={ category }> { category }</li> }) }
   </ol>

  */

  return (
    <>
     <h2>GifExpertApp</h2>
     <AddCategory setCategories={ setCategories} />
     <hr /> 

   <ol>
   { 
     categories.map( category => (
        <GifGrid
           key={ category }
           category= { category }
      />    
   ))

  } 
   </ol>  

   </>
   )

}

export default GifExpertApp