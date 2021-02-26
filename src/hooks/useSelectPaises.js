import React, {useState} from 'react';

const useSelectPaises = (stateInicialPaises, opciones) => {

    // state del custom hook
    const [state, actualizarStatePaises] = useState(stateInicialPaises);

    const SelectPaises =  () => (
        <select className="custom-select m-2" value={state} onChange={e => actualizarStatePaises(e.target.value)} >
            {opciones.map(opcion => (
                <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
            ))}
        </select>
    );

    return [state, SelectPaises];
}
 
export default useSelectPaises;