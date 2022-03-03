import React from "react";
import { Link } from "react-router-dom";
import production from '../../../assets/images/produccion.jpeg';
function Produccion() {
  return (
    <>
      <header>
      <ul>
          <li>
            <Link to="/html-lab" >Inicio</Link>
          </li>
          <li>
            <Link to="/html-lab/resumen" >Resumen</Link>
          </li>
          <li>
            <Link to="/html-lab" >Produccion</Link>
          </li>
          <li>
            <Link to="/html-lab/lanzamiento" >Lanzamiento</Link>
          </li>
          <li>
            <Link to="/html-lab/recepcion" >Recepcion</Link>
          </li>
        </ul>
        <hr />
      </header>

      <main>
        <img
          src={production}
          alt="produccion"
          width="400"
          height="200"
        />
        <h1>Produccion</h1>

        <div>
          <article>
            <h2>Desarrollo</h2>
            <p>
              El 20 de enero de 2010, AMC anunció que había ordenado el piloto
              de una posible adaptación del cómic The Walking Dead supervisada
              por Frank Darabont y Gale Anne Hurd como productores ejecutivos y
              Darabont como guionista y director. La decisión de AMC se dio en
              parte por la riqueza del contenido del material de origen, y el
              involucramiento de Darabont.​ Ese mismo mes, un resumen del
              argumento del episodio piloto atrajo la atención en la industria.​
              El equipo de producción comenzó a grabar el piloto en Atlanta,
              Georgia el 15 de mayo de 201023​ después de que AMC ordenara
              oficialmente una primera temporada de seis episodios.​ El resto de
              los episodios fueron filmados a partir del 2 de junio del 2010 con
              Darabont actuando como show runner. El 31 de agosto de 2010,
              Darabont señaló que la serie se renovaría para una segunda
              temporada, con el inicio de producción programado para febrero de
              2011. El 8 de noviembre de 2010, AMC secundó lo dicho por el
              director y añadió que la temporada constaría de 13 episodios. El
              25 de octubre de 2011 AMC anunció que había ordenado una tercera
              temporada: «La segunda temporada sigue ofreciendo las
              transmisiones más fuertes para ningún tipo de drama en la historia
              del cable básico». El 21 de diciembre de 2012, la cadena anunció
              una cuarta temporada y el 29 de octubre de 2013 la producción de
              una quinta parte.
            </p>
          </article>

          <article>
            <h2>Música</h2>
            <p>
              Bear McCreary está a cargo de la composición de la música de la
              serie. El músico manifestó que el tema principal está basado en su
              visión del diseño de producción de la secuencia de apertura. En
              lugar de componer una pieza musical completa como en sus trabajos
              anteriores, McCreary se inclinó por hacer un motivo simple y
              repetitivo.
            </p>
          </article>

          <article>
            <h2>Rodaje</h2>
            <p>
              La filmación de The Walking Dead se lleva a cabo en el estado de
              Georgia, en su mayoría.​ Toda la serie está rodada en un formato
              de 16 mm. David Tattersall se encargó de dirigir la fotografía del
              primer episodio, quien fue reemplazado por David Boyd en el resto
              de la serie. El diseño de producción es construido por Greg Melton
              y Alex Hajdu. El equipo de los efectos visuales está conformado
              por el diseñador veterano Gregory Nicotero, el coordinador de
              efectos especiales Darrell Pritchett, y los supervisores de
              efectos Sam Nicholson y Jason Sperling.
            </p>
          </article>
        </div>
      </main>
    </>
  );
}

export default Produccion;
