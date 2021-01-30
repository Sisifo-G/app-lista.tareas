import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const FormularioTareas = () => {
    return ( 
        <form action="" className="formulario-tareas">
            <input 
                placeholder="Escribe una tarea" 
                type="text" 
                className="formulario-tareas__input" 

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