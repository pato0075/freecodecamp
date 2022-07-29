import React from 'react';
import '../componentes/hojas-de-estilos/Boton.css'


/*se reemplaza la palabra props por ({texto})*/
function Boton ({ texto, esBotonDeClic, manejarClic }) {
  return (
    <button
        className={ esBotonDeClic ? 'boton-clic' : 'boton-reiniciar' }
      onClick={manejarClic}>
      {texto}
    </button>
  );
}

export default Boton;