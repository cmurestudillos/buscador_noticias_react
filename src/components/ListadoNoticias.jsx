import React from 'react';
// Componentes
import Noticia from './Noticia';
// Documentacion del componente 
import PropTypes from 'prop-types'

const ListadoNoticias = ({noticias}) =>  ( 
    <div className="card-columns mb-4">
        {noticias.map(noticia => (
            <Noticia key={noticia.url} noticia={noticia} />
        ))}
    </div>
);

// Definicion del componente "ListadoNoticias", que props se le pasan
ListadoNoticias.propTypes = {
    noticias: PropTypes.array.isRequired
}
 
export default ListadoNoticias;