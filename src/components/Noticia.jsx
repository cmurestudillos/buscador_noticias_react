import React from 'react';
// Documentacion del componente 
import PropTypes from 'prop-types';

const Noticia = ({noticia}) => {
    // extraer los datos
    const { urlToImage, url, title, description, source } = noticia;

    const imagen = (urlToImage) ?
        <div>
            <img src={urlToImage} alt={title} className="card-img-top" />
            <span className="badge badge-info">
                <strong>Feed RSS: </strong>{source.name}
            </span>
        </div>
    : null;

    return ( 
            <div className="card">
                {imagen}
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-outline-info btn-block">
                        Ver Noticia Completa
                    </a>                    
                </div>
            </div>
     );
}

// Definicion del componente "Noticia", que props se le pasan
Noticia.propTypes = {
    noticia: PropTypes.object.isRequired
}
 
export default Noticia;