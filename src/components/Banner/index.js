import useMovies from '../../hooks/useMovies';
import { truncateString } from '../../utils/utils';
import { apiurls } from '../../config/api-urls';
import { useEffect, useState } from 'react';
import './Banner.css';

function Banner() {
  const { movies } = useMovies(apiurls.fetchNetflixOriginals);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    setMovie(movies[Math.floor(Math.random() * movies.length - 1)]);
  }, [movies]);

  return (
    <header
      className='banner'
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <div className='section-center banner__center'>
        <div className='banner__contents'>
          <h1 className='banner__title'>
            {movie?.name || movie?.title || movie?.original_name}
          </h1>

          <div className='banner__buttons'>
            <button className='banner__button'> Play</button>
            <button className='banner__button'>My List</button>
          </div>

          <p className='banner__description'>
            {truncateString(movie?.overview, 150)}
          </p>
        </div>
      </div>

      <div className='banner--fadeBottom'></div>
    </header>
  );
}

export default Banner;
