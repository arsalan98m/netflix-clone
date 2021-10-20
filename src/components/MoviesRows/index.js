import { useState } from 'react';
import { apiurls } from '../../config/api-urls';
import SingleRow from '../SingleRow';
import './MoviesRows.css';

function MoviesRows() {
  return (
    <section className='moviesrows'>
      <div className='section-center moviesrows__center'>
        <SingleRow
          title='NETFLIX ORIGINALS'
          fetchUrl={apiurls.fetchNetflixOriginals}
          isLargeRow
        />

        <SingleRow title='Trending' fetchUrl={apiurls.fetchTrending} />

        <SingleRow title='Top Rated' fetchUrl={apiurls.fetchTopRated} />
        <SingleRow title='Action Movies' fetchUrl={apiurls.fetchActionMovies} />
        <SingleRow title='Comedy Movies' fetchUrl={apiurls.fetchComedyMovies} />
        <SingleRow
          title='Cartoon Movies'
          fetchUrl={apiurls.fetchCartoonMovies}
        />
        <SingleRow title='Horror Movies' fetchUrl={apiurls.fetchHorrorMovies} />
        <SingleRow title='Documentries' fetchUrl={apiurls.fetchDocumentries} />
      </div>
    </section>
  );
}

export default MoviesRows;
