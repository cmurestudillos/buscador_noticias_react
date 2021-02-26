import React from 'react'; 
// Documentacion del componente 
import PropTypes from 'prop-types';
// Hooks
import useSelectNoticias from '../hooks/useSelectNoticias';
import useSelectPaises from '../hooks/useSelectPaises';

const Formulario = ({guardarCategoria, guardarPais}) => {

    const OPCIONES = [
        { value: 'general', label: 'General'},
        { value: 'business', label: 'Negocios'},
        { value: 'entertainment', label: 'Entretenimiento'},
        { value: 'health', label: 'Salud'},
        { value: 'science', label: 'Ciencia'},
        { value: 'sports', label: 'Deportes'},
        { value: 'technology', label: 'Tecnología'},
    ]

    const PAISES = [
        { value: 'ar', label: 'Argentina'},
        { value: 'au', label: 'Australia'},
        { value: 'at', label: 'Austria'},
        { value: 'be', label: 'Belgium'},
        { value: 'br', label: 'Brazil'},
        { value: 'bg', label: 'Bulgaria'},
        { value: 'ca', label: 'Canada'},
        { value: 'cn', label: 'China'},
        { value: 'co', label: 'Colombia'},
        { value: 'cu', label: 'Cuba'},
        { value: 'cz', label: 'Czech Republic'},
        { value: 'eg', label: 'Egypt'},
	    { value: 'fr', label: 'France'},
        { value: 'ge', label: 'Germany'},
        { value: 'gr', label: 'Greece'},
        { value: 'hk', label: 'Hong Kong'},
        { value: 'hu', label: 'Hungary'},
        { value: 'in', label: 'India'},
        { value: 'id', label: 'Indonesia'},
        { value: 'ie', label: 'Ireland'},
        { value: 'il', label: 'Israel'},
        { value: 'it', label: 'Italy'},
        { value: 'jp', label: 'Japan'},
        { value: 'lv', label: 'Latvia'},
        { value: 'lt', label: 'Lithuania'},
        { value: 'my', label: 'Malaysia'},
        { value: 'mx', label: 'Mexico'},
        { value: 'ma', label: 'Morocco'},
        { value: 'nl', label: 'Netherlands'},
        { value: 'nz', label: 'New Zealand'},
        { value: 'ng', label: 'Nigeria'},
        { value: 'no', label: 'Norway'},
        { value: 'ph', label: 'Philippines'},
        { value: 'pl', label: 'Poland'},
        { value: 'pt', label: 'Portugal'},
        { value: 'ro', label: 'Romania'},
        { value: 'ru', label: 'Russia'},
        { value: 'sa', label: 'Saudi Arabia'},
        { value: 'rs', label: 'Serbia'},
        { value: 'sg', label: 'Singapore'},
        { value: 'sk', label: 'Slovakia'},
        { value: 'si', label: 'Slovenia'},
        { value: 'za', label: 'South Africa'},
        { value: 'kr', label: 'South Korea'},
        { value: 'se', label: 'Sweeden'},
        { value: 'ch', label: 'Swizerland'},
        { value: 'tw', label: 'Taiwan'},
        { value: 'po', label: 'Poland'},
        { value: 'th', label: 'Tailand'},
        { value: 'tr', label: 'Turkey'},
        { value: 'ae', label: 'UAE'},
        { value: 'ua', label: 'Ukraine'},
        { value: 'gb', label: 'United Kingdom'},
        { value: 'us', label: 'United States'},
        { value: 've', label: 'Venezuela'}        
    ]

    // utilizar custom hook
    const [ categoria, SelectNoticias ] = useSelectNoticias('general', OPCIONES);
    const [ pais, SelectPaises ] = useSelectPaises('us', PAISES);

    // submit al form, pasar categoria a app.js
    const buscarNoticias = e => {
        e.preventDefault();

        guardarCategoria(categoria);
        guardarPais(pais)
    }

    return ( 
        <div className="jumbotron jumbotron-fluid bg-white mb-4">
            <form onSubmit={buscarNoticias} >
                <h1 className="display-4 text-center">Noticias por Categor&iacute;a y Pais</h1>
                <hr className="my-4"></hr>
                <div className="row">
                    <div className="col"><SelectNoticias /></div>
                    <div className="col"><SelectPaises /></div>
                </div>
                <button type="submit" className="btn btn-outline-warning btn-lg btn-block mx-auto w-50" value="Buscar" >Buscar</button>
            </form>
        </div> 
     );
}

// Definicion del componente "Formulario", que props se le pasan
Formulario.propTypes = {
    guardarCategoria: PropTypes.func.isRequired,
    guardarPais: PropTypes.func.isRequired
}
 
export default Formulario;