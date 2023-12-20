import { useEffect, useState } from 'react';
import {getGifs } from '../helpers/getGifs';

//creamos con rafc el funcional component
export const useFetchGifs = ( category ) => {

const [state, setState] = useState({
    data: [],  //objeto que tiene una data que es un arreglo
    loading: true
});


   //useEffect

    //los efecto no pueden ser async porque esperan algo sincrono
    useEffect(() => {
     //se pone un arrglo vacio para que solo se ejecute una sola vez
     //aqui hacemos la peticion para traer las imagenes

     //haciendo la peticion de las imagenes con el getGifs
     getGifs( category )
          .then (imgs => {

            setTimeout ( ()=> {
               console.log(imgs);
                setState({
                    data:imgs,
                    loading:false
                })

            }, 3000);

          })



    }, [category])






  /*

   setTimeout( () => {
     
    setState({
        data: [1,2,3,4,5,6,7,8],  //objeto que tiene una data que es un arreglo
        loading: false
    })

   }, 3000);
  */


      //state contiene la data:[], y  loading:true
      //y lo regresa en el return
      return state;

}
