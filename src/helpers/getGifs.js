

 //enviamos category como argumento y nos regresa las imagenes que son de esa categoria
export const getGifs = async( category ) => {
     
    
    /* const url= 'https://api.giphy.com/v1/gifs/search?api_key=gjJZIsW3BoojybBxoLExJrcuwSYJo822&q=hola&limit=10'; */
    
  

  const url= `https://api.giphy.com/v1/gifs/search?api_key=gjJZIsW3BoojybBxoLExJrcuwSYJo822&q=${ encodeURI(category) }&limit=10`;
    
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
   
   //al pasar el fecth a este lugar cambiamos setImages( gifs ); por return gifs;
   //setImages( gifs );
  
   return gifs; //gifs obtiene la coleccion de las imagenes de async

  // si se utiliza el setImagen se hace un ciclo
  //por eso hay que usar el useEffect
  //console.log({data}); // resestructurando para traer los datos que necesito
  
}

