import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
//import { getGifs } from '../helpers/getGifs';


/*comentamos con  //1  las lineas para hacer un custom hooks useFecthGifts.js */


//recibimos category como argumento 
//comentamos con //1 para poner un custumHook
//1 export const GifGrid = ({ category }) => {

    //para trae las imagenes 
    //useEffect se ejecuta una sola vez 
    //const [count, setCount] = useState(0);
    //1 const [images, setImages] = useState([]);
    //1 useEffect( () => {
     // getGifs();  //importamos getGifs() porque movimos el fecth y le ponemos la categoria
     // y le ponemos el then donde mandamos a la funcion setImages
     //  getGifs( category ).then( imgs => setImages (imgs) );
     //1    getGifs( category ).then( setImages );  //optimizado

    //el segundo argumento que enviamos es una lista de dependencias
    //1}, [ category ])  
    //ponemos la categoria en las llaves para enviar la dependencia de la categoria
  
    /* se pone la peticion fecth en el helpers/getGifs.js
       const getGifs = async( category ) => {
       const url= https://
    */

       export const GifGrid = ({ category }) => {

        /* const state = useFetchGifs();
        console.log(state); 
        */

        // desestructuramos el const state = useFetchGifs();
        //enviamos la categoria en el useFetchGifs(); como argumento porque lo va utilizar
        //export const useFetchGifs = ( category ) => { en el archivo useFetchGifs.js
        
        // renombramos data a images con data:nombre-renombrar
        const { data:images, loading } = useFetchGifs( category );
        //console.log(loading);
        //console.log(data);
      
        //cometamos con {/*  */}

  return (
    <>
    <h3>  Obteniendo Gifs   </h3>
    
    <h3 className="animate__animated animate__bounce animate_fadeIn">  { category }   </h3>
    
      {/* { loading ? <p> Cargando...  </p>: 'Data update' }   */} 
    
    { loading && <p className="animate__animated animate__flash"> Loading...  </p> } 
    
      <div className="card-grid">
  
  {

 /* data.map( img => ( */
    images.map( img => (
      <GifGridItem 
        key={ img.id }
        {...img }
      />
    ))
    }

  </div>
  </>
      
  )
}

