import React, {useState} from 'react';

const useSelectNoticias = (stateInicialNoticias, opciones) => {

    // state del custom hook
    const [state, actualizarState] = useState(stateInicialNoticias);

    const SelectNoticias =  () => (
        <select className="custom-select m-2" value={state} onChange={e => actualizarState(e.target.value)} >
            {opciones.map(opcion => (
                <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
            ))}
        </select>
    );

    return [state, SelectNoticias];
}
 
export default useSelectNoticias;