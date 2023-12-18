//rafc
import React, { useState } from 'react'
import PropTypes from 'prop-types';

//aqui llamamos el valor de con setCategories de GifExpertApp
export const AddCategory = ({ setCategories }) => {
 
   //para saber que se escribe en la caja de tesxto utilizamos useState
   //inputValue es el ultimo valor que se puso en la caja de texto
   //const [inputValue, setInputValue] = useState('Hola Mundo ');
   //ponemos un string vacio en  useState('') para que no tenga error 
   const [inputValue, setInputValue] = useState('');

   //para presionar enter y hace el cambio
   const handleInputChange = ( e ) => {
        setInputValue( e.target.value ) ;
    }

   const handleSubmit = (e) => {
    e.preventDefault();

    if( inputValue.trim().length > 2) {
    console.log('recibimos el valor de la caja de texto: ', inputValue);
    setCategories( cats => [ inputValue, ...cats, ]);
    //ponemos un espacio vacio para que no muestre nada despues de hacer enter
    setInputValue(''); 
    }
   }

    
   return (

        <form onSubmit={handleSubmit}>
            <input   
                type="text"
                value= { inputValue }
                onChange={ handleInputChange }
            />
       </form>
    

  )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
