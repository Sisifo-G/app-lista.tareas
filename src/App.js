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
        completada: true
      }
    ]
  );

  const [ mostrarCompletadas, setMostrarCompletadas ] = useState(true);
  
  return (
    <div className="contenedor">
      <Header 
          mostrarCompletadas={mostrarCompletadas}
          setMostrarCompletadas={setMostrarCompletadas}
      />
      <FormularioTareas tareas={tareas} setTareas={setTareas} />
      <ListaTareas 
          tareas={tareas} 
          setTareas={setTareas}
          mostrarCompletadas={mostrarCompletadas}
        />
      </div>
  );
}

export default App;
