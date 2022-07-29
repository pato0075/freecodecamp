import './App.css';
import Testimonio from './componentes/testimonios';

function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Esto dicen nuestros alumnos</h1>      
     <Testimonio
        nombre='Emma Bostian'
        pais='Suecia'
        imagen='gear'
        cargo='Ingeniera de Software'
        empresa='Spotify'
        testimonio='hkjjjjjjjjjjjjjjjjjjjjjjjjjhdhhhhhhhhhsjdkhkajhdkajhdakjhlh'/>
      <Testimonio
        nombre='Shaw Wamg'
        pais='Singapur'
        imagen='guru'
        cargo='albañil'
        empresa='rusa'
        testimonio='jflksahflksjfaslkfhslkfhsñlfjsñlfjñslakfjñslkfjñslakjfasñlfkj'
         />
      <Testimonio
        nombre='Sara'
        pais='El congo'
        imagen='slayer'
        cargo='barbera'
        empresa='barberia'/>   

     </div>
    </div>
  );
}

export default App;
