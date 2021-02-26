import React, { Fragment, useState, useEffect } from 'react';
// Componentes
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';
import Footer from './components/Footer';

function App() {

  // definir la categoria, paises y noticias
  const [categoria, guardarCategoria] = useState('');
  const [pais, guardarPais] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  // Llamada a la api cuando el componente este cargado
  useEffect(() => {
    const consultarAPI = async () => {
      // Por defecto, noticias de "USA"
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=f044d23c057b48d4b3f114399dc4ff0f`;

      // Si ha seleccionado pais, mostramos noticias de ese pais
      if(pais !== '' && categoria !== ''){
        url = `https://newsapi.org/v2/top-headlines?country=${pais}&category=${categoria}&apiKey=f044d23c057b48d4b3f114399dc4ff0f`;
      }

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles);
    }
    consultarAPI();
  }, [categoria, pais]);

  return (
    <Fragment>
        <Header titulo='Buscador de Noticias' />
        <div className="container bg-white">
            <Formulario guardarCategoria={guardarCategoria} guardarPais={guardarPais} />
            <ListadoNoticias noticias={noticias} />
        </div>
        <Footer />
    </Fragment>
  );
}

export default App;
