import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import FormularioTareas from './components/FormularioTareas'
import ListaTareas from './components/ListaTareas';


const App = () => {

  const tareasGuardadas = localStorage.getItem('tareas') ? JSON.parse(localStorage.getItem('tareas')) : [];
  const [ tareas, setTareas ] = useState(tareasGuardadas);

  // Guardando el estado dentro del localstorage
  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
    
  }, [tareas]);

  // Acceder al localstorage y comprobar si mostrarCompletadas es null
  let configMostrarCompletadas = '';
  if(localStorage.getItem('mostrarCompletadas') === null) {
    configMostrarCompletadas = true;
  }else {
    configMostrarCompletadas = localStorage.getItem('mostrarCompletadas') === 'true';
  }

  //El estado de mostrarCompletadas
  const [ mostrarCompletadas, setMostrarCompletadas ] = useState(configMostrarCompletadas);
  
  useEffect(() => {
    localStorage.setItem('mostrarCompletadas', mostrarCompletadas.toString());
    
  }, [mostrarCompletadas]);
  
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
