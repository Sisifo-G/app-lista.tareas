import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import FormularioTareas from './components/FormularioTareas'
import ListaTareas from './components/ListaTareas';
const App = () => {

  const [ tareas, setTareas ] = useState(
    [
      {
        id: 1,
        texto: 'Pasear al gato',
        completada: false
      },
      {
        id: 2,
        texto: 'Practicar ReactJs',
        completada: false
      }
    ]
  );
  
  return (
    <div className="contenedor">
     <Header />
     <FormularioTareas tareas={tareas} setTareas={setTareas} />
     <ListaTareas tareas={tareas}/>
    </div>
  );
}

export default App;
