import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const FormularioTareas = ({tareas, setTareas}) => {

    const [ inputTarea, setInputTarea ] = useState('');

    const handleInput = (e) => {
        setInputTarea(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setTareas(
            [
                ...tareas, 
                {
                    id: uuidv4(),
                    texto: inputTarea,
                    completada: false
                }
            ]);
    }

    return ( 
        <form action="" className="formulario-tareas" onSubmit={handleSubmit}>
            <input 
                placeholder="Escribe una tarea" 
                type="text" 
                className="formulario-tareas__input" 
                value={inputTarea}
                onChange={(e) => handleInput(e)}
                />
            <button 
                type="submit"
                className="formulario-tareas__btn"
                >
                    <FontAwesomeIcon icon={faPlusCircle} className="formulario-tareas__icono-btn"/>
                </button>
        </form>
     );
}
 
export default FormularioTareas;