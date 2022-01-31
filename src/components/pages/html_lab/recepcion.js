import React from "react";
import { Link } from "react-router-dom";
function Recepcion() {
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
        <h1>Recepcion</h1>

        <article>
          <h2>Recepcion critica</h2>
          <p>
            Las primeras seis temporadas y las temporadas novena y décima de The
            Walking Dead han sido bien reseñadas por críticos reconocidos,
            mientras que las temporadas séptima y octava recibieron más críticas
            mixtas. En Rotten Tomatoes, la serie tiene una calificación promedio
            del 81%.
          </p>
        </article>

        <article>
          <h2>Comentarios sobre la diversidad</h2>
          <p>
            Algunos críticos han comentado sobre la creciente diversidad de la
            serie. Este enfoque fue inicialmente aplaudido por los
            comentaristas, pero algunos más tarde afirmaron que había alcanzado
            lo que describieron como «masa crítica». A partir de 2015, algunos
            comenzaron a preguntarse si el programa estaba en peligro de
            volverse «demasiado diverso».​ Robert Kirkman ha discutido la
            creciente diversidad del programa y los cómics. Describió cómo
            lamenta la falta de diversidad en los primeros números de la serie
            de cómics y explicó cómo habrían sido «mucho más diversos» si los
            hubiera comenzado ahora.
          </p>
        </article>

        <article>
          <h2>Audiencias</h2>
          <p>
            Durante su primera temporada, The Walking Dead atrajo entre cuatro y
            seis millones de espectadores. La audiencia comenzó a aumentar en su
            segunda temporada. Durante las temporadas tres a seis, atrajo de
            diez a diecisiete millones de espectadores.​ En 2012, durante su
            tercera temporada, se convirtió en la primera serie de cable en la
            historia de la televisión en tener la mayor audiencia total de todas
            las series entre adultos de 18 a 49 años. En 2014, la audiencia
            total para el estreno de la quinta temporada del programa fue de
            17,30 millones, lo que lo convierte en el episodio de una serie más
            visto en la historia del cable.​ En 2016, un estudio del New York
            Times de las 50 series de televisión con más me gusta en Facebook
            descubrió que, como la mayoría de las otras series de zombis, The
            Walking Dead «es más popular en las zonas rurales, particularmente
            en el sur de Texas y el este de Kentucky».​ Las audiencias
            comenzaron a disminuir durante la séptima temporada y han seguido
            bajando constantemente, lo que se atribuyó a una variedad de
            factores, incluida la presunta muerte de Rick. Al final de la
            temporada nueve, había menos espectadores que en cualquier otro
            momento desde la primera temporada del programa.
          </p>
        </article>
      </main>
    </>
  );
}

export default Recepcion;
