import React, { useEffect, useState } from "react";

const Lista = () => {
//    const personas =  ['Leandro', 'Pedro', 'Paula', 'Nicolás'] 

const [personas, setPersona] = useState([]);

useEffect(()=> { 
    
    
    fetch ('http://localhost:3000/lista').then(resp => resp.json()).then(data => setPersona(data)).catch(error =>{
        console.log ('no se pudo obtener personas', error)} );


},[] )

return(

    <>
    <h1>Personas</h1>
    <ul>
    { personas.map ((persona, index) => (

        <li key={ index }> { persona.nombre } </li>
    ))
    
}
    </ul>
       
    </>
)

}
export default Lista;