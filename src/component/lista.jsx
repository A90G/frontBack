import React, { useEffect, useState } from "react";
import './list.css';

const Lista = () => {
//    const personas =  ['Leandro', 'Pedro', 'Paula', 'Nicolás'] 

const [personas, setPersona] = useState([]);

useEffect(()=> { 
    
    
    fetch ('http://localhost:3000/lista').then(resp => resp.json()).then(data => setPersona(data)).catch(error =>{
        console.log ('no se pudo obtener personas', error)} );


},[] )

return(

    <>
    <h1 className="h1-list">Personas</h1>
    <ul className="ul-list">
    { personas.map ((persona, index) => (

        <li className="li-list" key={ index }> { persona.nombre } </li>
    ))
    
}
    </ul>
       
    </>
)

}
export default Lista;