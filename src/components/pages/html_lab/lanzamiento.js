import React from "react";
import { Link } from "react-router-dom";
function Lanzamiento() {
  return (
    <>
      <header>
        <ul>
          <li>
            <Link to="/html-lab">Inicio</Link>
          </li>
          <li>
            <Link to="/html-lab/resumen">Resumen</Link>
          </li>
          <li>
            <Link to="/html-lab">Produccion</Link>
          </li>
          <li>
            <Link to="/html-lab/lanzamiento">Lanzamiento</Link>
          </li>
          <li>
            <Link to="/html-lab/recepcion">Recepcion</Link>
          </li>
        </ul>
        <hr />
      </header>

      <main>
        <div>
          <h1>Lanzamiento</h1>

          <p>
            Escenas del piloto se proyectaron el 23 de julio de 2010, como parte
            de la San Diego Comic Con de 2010. Se estrenó en AMC el 31 de
            octubre de 2010 y se estrenó internacionalmente en Fox International
            Channels durante la primera semana de noviembre. Casi dos semanas
            antes del estreno oficial en AMC, el episodio piloto se filtró en
            línea.7 Los derechos de emisión internacional de la serie se
            vendieron y anunciaron el 14 de junio de 2010. La serie se transmite
            por Fox International Channels en 126 países en 33 idiomas. La
            quinta temporada debutó su primera parte el 13 de octubre de 2014,
            la segunda parte se estrenó el 9 de febrero de 2015.
          </p>

          <article>
            <h2>Version para hogar</h2>
            <p>
              La primera temporada fue lanzada en DVD y Blu-ray el 8 de marzo de
              2011.​ El 4 de octubre de 2011 se lanzó en DVD y Blu-ray una
              edición especial de tres discos de la primera temporada, con
              nuevas presentaciones y comentarios de audio.​ Las versiones
              europeas de la primera temporada en DVD y Blu-ray están editadas
              por gore, con cortes en los episodios dos («Guts»), tres («Tell It
              to the Frogs»), cuatro («Vatos»)81​ y cinco («Wildfire»).​ La
              primera temporada fue relanzada en Alemania por eOne/WVG como una
              versión especial sin cortes en DVD y Blu-ray el 31 de mayo de
              2013.
            </p>
          </article>

          <article>
            <h2>Sindicación</h2>
            <p>
              MyNetworkTV adquirió los derechos de sindicación de emisión de la
              serie en Estados Unidos, siendo estrenada el 1 de octubre de
              2014.​ La versión que se emite en MyNetworkTV se edita para
              cumplir con los estándares de la televisión abierta.
            </p>
          </article>
        </div>
      </main>
    </>
  );
}

export default Lanzamiento;
