import React from 'react';
import '../hojas-estilos/testimonio.css';

function Testimonio (props) {
  return (
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio'
        src={require(`../imagenes/testimonio-${props.imagen}.jpg`)}
        alt='foto de gear'/>
    <div className='contenedor-testo-testimonio'/>
        <p className='nombre-testimonio'>{props.nombre} en {props.pais}</p>
        <p className='cargo-testimonio'>{props.cargo} en {props.empresa}</p>
        <p className='testo-testimonio'>"{props.testimonio}"</p>

    </div>
  );    
}

export default Testimonio;